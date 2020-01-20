import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MUIBundleWrapper from './mui/wrapper';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Public } from '../apps';
// for chrome/mobile etc - useless
import "scroll-behavior-polyfill";

ReactDOM.hydrate(
  <MUIBundleWrapper>
    <CssBaseline />
    <Router>
      <Public />
    </Router>
  </MUIBundleWrapper>,
  document.getElementById('root')
);
