import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { SheetsRegistry } from 'jss';
import JssProvider from 'react-jss/lib/JssProvider';
import { MuiThemeProvider, createGenerateClassName } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StaticRouter as Router } from 'react-router-dom';
import Public from '../../client/apps/Public';
import Private from '../../client/apps/Private';
import Admin from '../../client/apps/Admin';
import makeHTML from '../../client/html';
import theme from '../styles/mui/theme';

//TODO replace with req.data
// const fakeData = { name: 'JOE'};
// const data = fakeData;

export const renderComponent = (C, app) => {
  return (req, res) => {
    const { data } = req;
    const context = {};
    const generateClassName = createGenerateClassName();
    const sheetsRegistry = new SheetsRegistry();
    const sheetsManager = new Map();
    const componentHTML = ReactDOMServer.renderToString(
      <JssProvider registry={sheetsRegistry} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
          <CssBaseline />
          <Router location={req.url} context={context}>
            <C data={data} />
          </Router>
        </MuiThemeProvider>
      </JssProvider>
    );
    const css = sheetsRegistry.toString();
    const html = makeHTML(componentHTML, data, css, app);
    res.send(html);
  }
};

export const renderPublic = renderComponent(Public, 'public');
export const renderPrivate = renderComponent(Private, 'private');
export const renderAdmin = renderComponent(Admin, 'admin');
