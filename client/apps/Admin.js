import React from 'react';
import { Route } from 'react-router-dom';
import AdminMain from '../pages/AdminMain';
import AdminEmail from '../pages/AdminEmail';
import AppMenu from '../components/AppMenu';
import { loadAdminData } from '../queries';
import { getListMembersByListId } from '../queries';

class Admin extends React.Component {
  componentDidMount() {
    console.log('Admin');
    this.loadData();
  }

  loadData = async() => {
    // const person = {
    //   preferences: { language: 'EN' }
    // }
    // (new Date('10-04-2020').getTime()/10000).toString()
    const list = {
      name: 'listtwoagain',
      settings: {
        settings1: 'dontplayitnow'
      }
    }

    const data = await getListMembersByListId(5);
    // const location = {
    //   address_id: 5,
    //   settings: {
    //     settings1: 'this string could be coordinates'
    //   }
    // }
    // const data = await updateLocationById(2, location);
    window.data = data;
    console.log('data: ', data);
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
