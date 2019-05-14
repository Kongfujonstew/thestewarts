import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MUIBundleWrapper from './mui/wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Private from '../apps/Private';

ReactDOM.hydrate(
  <MUIBundleWrapper>
    <CssBaseline />
    <Router>
      <Private {...window.__INITIAL__DATA__} />
    </Router>
  </MUIBundleWrapper>,
  document.getElementById('root')
);
