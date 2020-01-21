import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { sendEmail, initGlitter } from '../api';

class RSVP extends React.Component {
  constructor(props) {
    super(props);

    this.defaultRSVP = {
      name: '',
      email: '',
      rsvpyes: true,
      total: '',
      food: '',
      notes: ''
    }

    this.state = {
      ...this.defaultRSVP,
      loading: false,
      hasRSVPd: false,
      showExistingRSVP: false
    }
  }

  componentDidMount = () => {
    const existingRSVP = this.getExistingRSVP();
    if (existingRSVP) {
      this.setState({ ...existingRSVP, hasRSVPd: true });
    }

    this.doGlitter = initGlitter();
  }

  getExistingRSVP = () => {
    let existingRSVP = null;
    if (localStorage  && localStorage.getItem) {
      existingRSVP = localStorage.getItem('rsvp');
    }

    return JSON.parse(existingRSVP);
  }

  handleTypeText = ({ target, target: { value } }) => {
    this.setState(({ [target.name]: value }));
    if (target.name === 'total' && value.length) {
      this.setState({ rsvpyes: value > 0 })
    }
  }

  handleClickCheckbox = () => {
    this.setState(({ rsvpyes: !this.state.rsvpyes, total: !this.state.rsvpyes === false ? '0' : '' }));
  }

  handleClickSend = async() => {
    this.setState({ loading: true });
    // send message; delete unnecessary fields used for ui on state
    const message = Object.assign({}, this.state);
    delete message.loading;
    delete message.showExistingRSVP;
    const sendSuccess = await sendEmail(message);
    this.scroll();
    if (sendSuccess) {
      this.setState({ loading: false, hasRSVPd: true, showExistingRSVP: false });
      this.saveRSVP();
      if (typeof this.doGlitter === 'function' && message.rsvpyes) {
        this.doGlitter();
      }
    } else {
      this.props.enqueueSnackbar('Something went wrong over here! Please try again - or just call!');
      this.setState({ loading: false });
    }
  }

  handleClickUpdate = () => {
    this.scroll();
    this.setState({ showExistingRSVP: true })
  };

  saveRSVP = () => {
    const { name, email, rsvpyes, total, food, notes } = this.state;
    if (localStorage) {
      // only set the actual rsvp items!
      localStorage.setItem('rsvp', JSON.stringify({ name, email, rsvpyes, total, food, notes }));
    }
  }

  scroll = () => {
    const el = document.getElementById('rsvp-container');
    el && el.scrollIntoView();
  }

  renderConfirmation = () => {
    const { rsvpyes } = this.state;
    const confirmationText = rsvpyes ? `You RSVP'd! We are so excited to see you.` : `Sorry we'll miss you!`;

    return (
      <React.Fragment>
        <span style={{ marginBottom: '32px', marginTop: '76px' }}>{confirmationText}</span>
        <span style={{ marginBottom: '225px', display: 'block !important' }}>Click below to change or update your rsvp:</span>
        <Button id="short-button" onClick={this.handleClickUpdate} className="short" variant="contained" color="primary">
          update
        </Button>
      </React.Fragment>
    );
  }

  clearExistingForm = () => {
    const reallyClear = window.confirm(`Are you sure you want to clear this rsvp data? You won't be able to update this current rsvp.`);
    reallyClear && localStorage && localStorage.clear();
    reallyClear && this.setState({ ...this.defaultRSVP, hasRSVPd: false });
  }

  renderForm = () => {
    const { name, email, rsvpyes, total, food, notes, loading, hasRSVPd, showExistingRSVP } = this.state;
    const isDisabled = loading || !name || !email || !total || isNaN(Number(total));
    const showClearButton = hasRSVPd && showExistingRSVP;

    return (
      <React.Fragment>
        <TextField onChange={this.handleTypeText} name="name" value={name} label="name" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="email" value={email} label="email" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="total" value={total} type="number" label="total # people in your group" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="food" value={food} label="food preferences" variant="outlined" />
        <TextField onChange={this.handleTypeText} name="notes" value={notes} label="other notes" variant="outlined" multiline />
        <Checkbox onClick={this.handleClickCheckbox} label="RSVP YES" checked={rsvpyes} color="primary" />
        <div id="please" style={{ display: 'inline !important', fontFamily: 'MrsEavesRoman', fontSize: '22px', width: 'unset', marginBottom: '0' }}>{`${rsvpyes ? ' ' : 'not ' } attending ${rsvpyes ? ' - this is good!' : '' }`}</div>
        <div className="buttons">
          <Button onClick={this.handleClickSend} style={{ flexBasis: showClearButton ? '47%' : '100%' }} variant="contained" color="primary" disabled={isDisabled}>{hasRSVPd ? 'update rsvp' : 'send'}</Button>
          { showClearButton && <Button onClick={this.clearExistingForm} variant="contained" color="primary" disabled={loading}>clear</Button>}
        </div>
      </React.Fragment>
    );
  }

  render() {
    const { hasRSVPd, showExistingRSVP } = this.state;
    const shouldRenderForm = !hasRSVPd || (hasRSVPd && showExistingRSVP);

    return (
      <div id="rsvp">
        <canvas id="canvas" style={{ position: 'absolute', left: '0', top: '0' }}></canvas>
        { shouldRenderForm && this.renderForm() }
        { !shouldRenderForm && this.renderConfirmation() }
      </div>
    );
  }
}

export default RSVP;
