import React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import SnackBar from '@material-ui/core/SnackBar';

class Public extends React.Component {
  componentDidMount() {
    console.log('cdm Home')
  }

  render() {
    return (
      <React.Fragment>
        <SnackBar />
        <h1 id="#testOctopus">Hello!!!!!! {this.props.name}!</h1>
        <Button variant="contained" color="primary" onClick={() => console.log('hi')}>
          Hello World
        </Button>
      </React.Fragment>
    )
  }
}

export default Public;
