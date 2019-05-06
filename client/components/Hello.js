import React from 'react';
import { Link } from 'react-router-dom';

class Hello extends React.Component {
  componentDidMount() {
    console.log('cdm Hello')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello!!!!!! {this.props.name}!</h1>
        <a href="/with-react-router">with React Router</a>
      </React.Fragment>
    )
  }
}

export default Hello;
