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
    console.log('wedding cdm Hello')
  }

  render() {

    return (
      <React.Fragment>
        <Background />
        <div id="fade-in" style={{ backgroundColor: 'transparent' }}>
          <Welcome />
        </div>
        <div style={{ backgroundColor: 'grey' }}>
          <About />
        </div>
        <div style={{ backgroundColor: 'transparent' }}>
          <ThePlan />
        </div>
        <div style={{ backgroundColor: '#e3d1b5' }}>
          <Location />
        </div>
        <div style={{ backgroundColor: '#002b80' }}>
          <Rsvp />
        </div>
        <div style={{ backgroundColor: 'grey' }}>
          <Faq />
        </div>
        <div style={{ backgroundColor: 'white' }}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Wedding;
