import React from 'react';
import { Route } from 'react-router-dom';
import Main from '../pages/Main';

class Private extends React.Component {
  componentDidMount() {
    console.log('cdm Home')
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/private" component={Main}/>
      </React.Fragment>
    )
  }
}

export default Private;
