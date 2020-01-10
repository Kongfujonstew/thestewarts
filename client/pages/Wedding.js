import React from 'react';
import About from '../components/About';
import Background from '../components/Background';
import Faq from '../components/FAQ';
import Footer from '../components/Footer';
import Location from '../components/Location';
import Rsvp from '../components/RSVP';
import ThePlan from '../components/ThePlan';
import Welcome from '../components/Welcome';

class Wedding extends React.Component {
  componentDidMount() {
    console.log('cdm Hello')
  }

  render() {
    const boxHeight = '880px';
    const welcomeBackgroundHeight = '1500px';

    return (
      <React.Fragment>
        <Background />
        <div id="welcome" style={{ height: welcomeBackgroundHeight, backgroundColor: 'transparent' }}>
          <Welcome />
        </div>
        <div id="about" style={{ height: boxHeight, backgroundColor: 'grey' }}>
          <About />
        </div>
        <div id="theplan" style={{ height: boxHeight, backgroundColor: 'transparent' }}>
          <ThePlan />
        </div>
        <div id="location" style={{ height: boxHeight, backgroundColor: '#e3d1b5' }}>
          <Location />
        </div>
        <div id="rsvp" style={{ height: boxHeight, backgroundColor: '#002b80' }}>
          <Rsvp />
        </div>
        <div id="faq" style={{ height: boxHeight, backgroundColor: 'grey' }}>
          <Faq />
        </div>
        <div id="footer" style={{ height: boxHeight, backgroundColor: 'white' }}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Wedding;
