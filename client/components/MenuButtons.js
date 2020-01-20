import React from 'react';
import Button from '@material-ui/core/Button';

class MenuButtons extends React.Component {
  scroll = (nextId) => () => {
    const el = document.getElementById(nextId);
    el && el.scrollIntoView();
  }

  handleClickRegistry = () => {
    window.open('https://www.zola.com/registry/hermannandjon2020', '_blank');
  }

  render() {
    return (
      <div className={this.props.thisClass}>
        <Button onClick={this.scroll('about-container')}>our story</Button>
        <Button onClick={this.scroll('rsvp-container')}>rsvp</Button>
        <Button onClick={this.handleClickRegistry}>registry ></Button>
      </div>
    );
  }
}

export default MenuButtons;
