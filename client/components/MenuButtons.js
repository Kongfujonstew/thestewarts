import React from 'react';
import Button from '@material-ui/core/Button';

class MenuButtons extends React.Component {

  scroll = (nextId) => {
    const el = document.getElementById(nextId);
    el && el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div className={this.props.thisClass}>
        <Button>ABOUT US</Button>
        <Button>EVENT</Button>
        <Button>REGISTRY</Button>
      </div>
    )
  }
}

export default MenuButtons;
