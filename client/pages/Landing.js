import React from 'react';
import { Link } from 'react-router-dom';
// the landing page goes to Wedding now
class Landing extends React.Component {
  componentDidMount() {
    console.log('cdm Hello')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Landing Page</h1>

      </React.Fragment>
    )
  }
}

export default Landing;
