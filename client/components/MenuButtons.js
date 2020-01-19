import React from 'react';
import Button from '@material-ui/core/Button';

class MenuButtons extends React.Component {
  scroll = (nextId) => () => {
    const el = document.getElementById(nextId);
    el && el.scrollIntoView({ behavior: 'smooth' });
  }

  handleClickRegistry = () => {
    window.open('https://www.zola.com/registry/hermannandjon2020', '_blank');
  }

  render() {
    return (
      <div className={this.props.thisClass}>
        <Button onClick={this.scroll('about-container')}>OUR STORY</Button>
        <Button onClick={this.scroll('rsvp-container')}>RSVP</Button>
        <Button onClick={this.handleClickRegistry}>REGISTRY</Button>
      </div>
    );
  }
}

export default MenuButtons;
