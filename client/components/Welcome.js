import React from 'react';
import Button from '@material-ui/core/Button';
class Welcome extends React.Component {

  scroll = (nextId) => () => {
    const el = document.getElementById(nextId);
    el && el.scrollIntoView();
  }

  // Welcome // 'some script'

  // HERMANN AND JON ARE GETTING MARRIED // Enamel

  // July 25, 2020 • SAN FRANCISCO, CA // Baskervville

  // Swedenborgian Church // MrsEavesItalic
  // 2107 Lyon St

  // <div><h2>Herman</h2><span> and </span><h2>Jon</h2></div>
  render() {
    return (
      <div id="welcome" className="box-shadow fade-in">
        <h1>Hermann and Jon</h1>
        <p style={{ marginBottom: '6px', fontFamily: 'Great Vibes' }}>are</p>
        <h2>Getting Married</h2>
        <h4>July 25, 2020 • SAN FRANCISCO, CA</h4>
        <p style={{ marginBottom: '0' }}>Swedenborgian Church</p>
        <p>2107 Lyon Street</p>
        <Button onClick={this.scroll('rsvp-container')} variant="outlined" color="primary">RSVP</Button>
        <img id="skyline" src="public/images/skyline.png" />
      </div>
    )
  }
}

export default Welcome;
