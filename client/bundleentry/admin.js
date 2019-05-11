import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MUIBundleWrapper from './mui/wrapper';
import Admin from '../apps/Admin';

ReactDOM.hydrate(
  <MUIBundleWrapper>
    <Router>
      <Admin name={window.__INITIAL__DATA__.name} />
    </Router>
  </MUIBundleWrapper>,
  document.getElementById('root')
);
