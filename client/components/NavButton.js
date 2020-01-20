import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class NavButton extends React.Component {
  scroll = () => {
    const { nextId } = this.props;
    const el = document.getElementById(nextId);
    const isMobile = (window.innerWidth <= 768);
    // this is bs.  no idea why the polyfill doesn't work
    if (isMobile) {
      el && el.scrollIntoView();
    } else {
      el && el.scrollIntoView({ behavior: 'smooth' });
    }
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
