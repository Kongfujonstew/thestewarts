import React from 'react';
import { Link } from 'react-router-dom';
import SimpleModel from '../../components/SimpleModel';
import { simple } from './models';

class AdminMain extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        <h1>Admin</h1>
        {simple.map(model => <SimpleModel key={model.name} items={this.props[model.name]} model={model} {...this.props} />)}
        <Link to="/admin">Back to Main</Link>
      </React.Fragment>
    )
  }
}

export default AdminMain;
