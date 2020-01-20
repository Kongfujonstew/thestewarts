import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { sendEmail } from '../api';

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
    if (sendSuccess) {
      this.setState({ loading: false, hasRSVPd: true, showExistingRSVP: false });
      this.saveRSVP();
    } else {
      this.props.enqueueSnackbar('Something went wrong over here! Please try again - or just call!');
      this.setState({ loading: false });
    }
  }

  saveRSVP = () => {
    const { name, email, rsvpyes, total, food, notes } = this.state;
    if (localStorage) {
      // only set the actual rsvp items!
      localStorage.setItem('rsvp', JSON.stringify({ name, email, rsvpyes, food, notes }));
    }
  }

  renderConfirmation = () => {
    const { hasRSVPd, rsvpyes, showExistingRSVP } = this.state;
    const confirmationText = rsvpyes ? `You RSVP'd! We are so excited to see you.` : `Sorry we'll miss you!`;
    const handleClickUpdate = () => { this.setState({ showExistingRSVP: !showExistingRSVP })};

    return (
      <div id="rsvp" style={{ textAlign: 'center' }}>
        <span style={{ marginBottom: '32px', marginTop: '48px' }}>{confirmationText}</span>
        <span style={{ marginBottom: '16px' }}>Click here to change or update your rsvp:</span>
        <Button onClick={handleClickUpdate} variant="contained" color="primary">
          update
        </Button>
      </div>
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
      <div id="rsvp">
        <TextField onChange={this.handleTypeText} name="name" value={name} label="name" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="email" value={email} label="email" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="total" value={total} label="total # people in your group" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="food" value={food} label="food preferences" variant="outlined" />
        <TextField onChange={this.handleTypeText} name="notes" value={notes} label="other notes" variant="outlined" multiline />
        <Checkbox onClick={this.handleClickCheckbox} label="RSVP YES" checked={rsvpyes} color="primary" />
        <span style={{ transform: 'translateY(4px)' }}>{`${rsvpyes ? ' ' : 'not ' } attending ${rsvpyes ? ' - this is good!' : '' }`}</span>
        <div className="buttons">
          <Button onClick={this.handleClickSend} style={{ flexBasis: showClearButton ? '47%' : '100%' }} variant="contained" color="primary" disabled={isDisabled}>{hasRSVPd ? 'update rsvp' : 'send'}</Button>
          { showClearButton && <Button onClick={this.clearExistingForm} variant="contained" color="primary" disabled={loading}>clear</Button>}
        </div>
      </div>
    );
  }

  render() {
    const { hasRSVPd, showExistingRSVP } = this.state;
    // User is inputing for first time, or updating existing rsvp
    if (!hasRSVPd || (hasRSVPd && showExistingRSVP)) {
      return this.renderForm();
    }

    // user has already submitted and it succeeded
    return this.renderConfirmation();
  }
}

export default RSVP;
