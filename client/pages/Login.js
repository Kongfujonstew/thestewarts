import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../api';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

class Login extends React.Component {
  constructor() {
    super();
    this.state = { email: '', password: '', grow: false, error: false };
  }

  componentDidMount = () => {
    // This makes the Grow component 'grow' in
    this.setState({ grow: true });
    window.TEST = this.props.history.go;
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleKeyPress = name => e => {
    if (name === 'password' && e.key === 'Enter') this.attemptLogin();
  }

  handleLoginSuccess = token => {
    window.location.replace('/private');
    // TODO add token to localStorage?
  }

  attemptLogin = async() => {
    const { email, password } = this.state;
    const token = await auth(email, password);
    if (token) {
      this.handleLoginSuccess(token);
    } else {
      this.setState({ error: true });
    }
  }

  render() {
    const { email, password, grow, error } = this.state;

    return (
      <React.Fragment>
        <h1>Login</h1>
        <Grow in={grow}>
          <Paper>
            <TextField variant="outlined" label="Email" value={email} onChange={this.handleChange('email')} onKeyPress={this.handleKeyPress('email')} />
            <TextField variant="outlined" label="Password" value={password} onChange={this.handleChange('password')} onKeyPress={this.handleKeyPress('password')} />
            <Button onClick={this.attemptLogin}>Log in</Button>
          </Paper>
        </Grow>
        <Link to="/">Return to home</Link>
      </React.Fragment>
    )
  }
}

export default Login;
