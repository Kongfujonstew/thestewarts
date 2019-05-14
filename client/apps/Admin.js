import React from 'react';
import { Route } from 'react-router-dom';
import AdminMain from '../pages/AdminMain';
import AdminEmail from '../pages/AdminEmail';
import AppMenu from '../components/AppMenu';
import { loadAdminData } from '../queries';

class Admin extends React.Component {
  componentDidMount() {
    console.log('Admin');
    this.loadData();
  }

  loadData = async() => {
    const { songs } = await loadAdminData();
    console.log('songs', songs);
  }

  render() {
    return (
      <React.Fragment>
        <AppMenu />
        <Route exact path="/admin/email" component={AdminEmail}/>
        <Route exact path="/admin" component={AdminMain} />
      </React.Fragment>
    )
  }
}

export default Admin;
