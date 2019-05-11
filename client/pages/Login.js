import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  componentDidMount() {
    console.log('cdm Hello')
  }

  attemptLogin = () => {
    
  }

  render() {
    return (
      <React.Fragment>
        <h1>Login</h1>
        <Link to="/">Return to home</Link>
      </React.Fragment>
    )
  }
}

export default Login;
