import React from 'react';
import Button from '@material-ui/core/Button';

class Welcome extends React.Component {
  scroll = (nextId) => () => {
    const el = document.getElementById(nextId);
    el && el.scrollIntoView();
  }

  render() {
    return (
      <div id="welcome" className="box-shadow fade-in">
        <h1>Hermann and Jon</h1>
        <p style={{ marginBottom: '6px', fontFamily: 'Great Vibes' }}>are</p>
        <h2>Getting Married</h2>
        <h4>July 25, 2020 • SAN FRANCISCO, CA</h4>
        <span>Swedenborgian Church</span>
        <span style={{ marginBottom: '20px' }}>2107 Lyon Street</span>
        <Button onClick={this.scroll('rsvp-container')} variant="outlined" color="primary">rsvp</Button>
        <img id="skyline" src="public/images/skyline.png" />
      </div>
    )
  }
}

export default Welcome;
