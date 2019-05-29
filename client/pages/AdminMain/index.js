import React from 'react';
// import { Link } from 'react-router-dom';
import SimpleModel from '../../components/SimpleModel';
import { simple } from './models';

// <Link to="/admin">Back to Main</Link>
class AdminMain extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <React.Fragment>
        {simple.map(model => <SimpleModel key={model.name} items={this.props[model.name]} model={model} {...this.props} />)}
      </React.Fragment>
    )
  }
}

export default AdminMain;
