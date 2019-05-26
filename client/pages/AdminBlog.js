import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <h1>Admin Blog</h1>
        <Link to="/admin">Back to Main</Link>
      </React.Fragment>
    )
  }
}

export default Home;
