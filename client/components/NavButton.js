import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

class NavButton extends React.Component {
  componentDidMount() {
    console.log('nav button cdm Hello')
  }

  scroll = () => {
    const { nextId } = this.props;
    const el = document.getElementById(nextId);
    el && el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    return (
      <div onClick={this.scroll} className="nav-button">
        <ArrowForwardIosIcon />
      </div>
    );
  }
}

export default NavButton;