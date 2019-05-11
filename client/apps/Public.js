import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

class Public extends React.Component {
  componentDidMount() {
    console.log('cdm Home')
  }

  render() {
    return (
      <React.Fragment>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={Home}/>
      </React.Fragment>
    )
  }
}

export default Public;
