import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MUIBundleWrapper from './mui/wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Public from '../apps/Public';

ReactDOM.hydrate(
  <MUIBundleWrapper>
    <CssBaseline />
    <Router>
      <Public name={window.__INITIAL__DATA__.name} />
    </Router>
  </MUIBundleWrapper>,
  document.getElementById('root')
);
