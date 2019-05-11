import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
    console.log('cdm Hello')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Admin</h1>
        <Link to="/admin/email">Email</Link>
      </React.Fragment>
    )
  }
}

export default Home;
