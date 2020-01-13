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
    this.setState(({ rsvpyes: !this.state.rsvpyes }));
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
    const confirmationText = rsvpyes ? `You RSVP'd! We are so excited to see you` : `Sorry we'll miss you!`;
    const handleClickUpdate = () => { this.setState({ showExistingRSVP: !showExistingRSVP })};

    return (
      <div id="rsvp">
        <span>{confirmationText}</span>
        <Button onClick={handleClickUpdate} variant="contained" color="primary">
          Update
        </Button>
      </div>
    );
  }

  renderForm = () => {
    const { name, email, rsvpyes, total, food, notes, loading, hasRSVPd, showExistingRSVP } = this.state;

    return (
      <div id="rsvp">
        <Checkbox onClick={this.handleClickCheckbox} label="RSVP YES" checked={rsvpyes} />
        <TextField onChange={this.handleTypeText} name="name" value={name} label="NAME" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="email" value={email} label="EMAIL" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="total" value={total} label="TOTAL IN PARTY" variant="outlined" required/>
        <TextField onChange={this.handleTypeText} name="food" value={food} label="FOOD PREFERENCES" variant="outlined" />
        <TextField onChange={this.handleTypeText} name="notes" value={notes} label="OTHER NOTES" variant="outlined" multiline />
        <Button onClick={this.handleClickSend} variant="contained" color="primary" disabled={loading}>Send</Button>
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
