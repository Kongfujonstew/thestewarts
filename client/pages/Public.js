import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
  componentDidMount() {
    console.log('cdm Home')
  }

  render() {
    return (
      <React.Fragment>
        <h1>Hello!!!!!! {this.props.name}!</h1>
        <a href="/with-react-router">with React Router</a>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
      </React.Fragment>
    )
  }
}

export default Home;
