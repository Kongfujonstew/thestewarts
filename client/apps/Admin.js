import React from 'react';
import { Route } from 'react-router-dom';
import AdminMain from '../pages/AdminMain';
import AdminEmail from '../pages/AdminEmail';

class Public extends React.Component {
  componentDidMount() {
    console.log('cdm Home')
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/admin/email" component={AdminEmail}/>
        <Route exact path="/admin" component={AdminMain} />
      </React.Fragment>
    )
  }
}

export default Public;
