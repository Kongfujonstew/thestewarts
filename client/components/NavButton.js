import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class NavButton extends React.Component {
  scroll = () => {
    const { nextId } = this.props;
    const el = document.getElementById(nextId);
    el && el.scrollIntoView();
  }

  render() {
    return (
      <div onClick={this.scroll} className="nav-button fade-in">
        <ArrowForwardIosIcon/>
      </div>
    );
  }
}

export default NavButton;
