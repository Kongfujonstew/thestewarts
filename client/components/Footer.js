import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { sendEmail } from '../api';

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      loading: false,
      sent: false
    }
  }

  handleTypeText = ({ target, target: { value } }) => {
    this.setState(({ message: value }));
  }

  handleClickSend = async() => {
    this.setState({ loading: true });
    // send message; delete unnecessary fields used for ui on state
    const message = Object.assign({}, this.state);
    delete message.loading;
    delete message.sent;
    // the 'message' is message.message now . . .
    const sendSuccess = await sendEmail(message);
    if (sendSuccess) {
      console.log('send success')
      this.setState({ loading: false, sent: true });
    } else {
      this.props.enqueueSnackbar('Something went wrong over here! Please try again - or just call!');
      this.setState({ loading: false });
    }
  }

  renderNotSent = () => {
    const { message, loading } = this.state;
    const isDisabled = loading || !message.length;

    return (
      <React.Fragment>
        <TextField onChange={this.handleTypeText} name="message" value={message} label="type your message here" variant="outlined" multiline />
        <Button onClick={this.handleClickSend} style={{ marginTop: '18px' }} variant="contained" color="primary" disabled={isDisabled}>send</Button>
      </React.Fragment>
    );
  }

  renderSent = () => <span style={{ marginTop: '18px' }}>Thanks. We'll get back to you asap.</span>;

  render() {
    const { sent } = this.state;

    if (sent) return (
      <div id="footer">
        <span style={{ marginTop: '18px' }}>Thanks. We'll get back to you asap.</span>
        <img src="/public/images/lotus.png" />
      </div>
    );

    return (
      <div id="footer">
        { sent ? this.renderSent() : this.renderNotSent() }
        <img src="/public/images/lotus.png" />
      </div>
    );
  }
}

export default Footer;
