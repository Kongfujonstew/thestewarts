import React from 'react';
import { Route } from 'react-router-dom';
import AppMenu from '../components/AppMenu';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { publicApp, privateApp, adminApp } from './apps';
import { publicPages, privatePages, adminPages } from '../pages';

const makeApp = (app, pages) => {
  class App extends React.Component {
    constructor(props) {
      super(props);
      // This is where the magic happens
      app.doThis(this, props);
    }

    render() {
      return (
        <AppMenu title={app.title} pages={pages}>
          {pages.map(page => (
            <Route
              key={page.path}
              exact
              path={page.path}
              render={() => <page.component {...this.state} {...this.app} />}
            />
          ))}
        </AppMenu>
      )
    }
  };

  const MyApp = withSnackbar(App);
  const AppWithSnackBar = props => <SnackbarProvider maxSnack={3}><MyApp {...props} /></SnackbarProvider>;
  return AppWithSnackBar;
};

export const Public = makeApp(publicApp, publicPages);
export const Private = makeApp(privateApp, privatePages);
export const Admin = makeApp(adminApp, adminPages);
