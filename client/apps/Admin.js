import React from 'react';
import { Route } from 'react-router-dom';
import AppMenu from '../components/AppMenu';
import { SnackbarProvider, withSnackbar } from 'notistack';
import { adminPages } from '../pages';

class App extends React.Component {
  componentDidMount() {
    console.log('this.props: ', this.props)
    console.log('admin app mount')
    // this.props.enqueueSnackbar('This is a warning message!', { variant: 'warning' })
  }

  render() {
    return (
      <AppMenu pages={adminPages}>
        {adminPages.map(page => <Route key={page.path} exact path={page.path} render={() => <page.Component {...this.props} />} />)}
      </AppMenu>
    )
  }
};

const MyApp = withSnackbar(App);
const IntegrationNotistack = props => <SnackbarProvider maxSnack={3}><MyApp {...props} /></SnackbarProvider>

export default IntegrationNotistack;
