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
        <div className="box-shadow" style={{ backgroundColor: 'grey' }}>
          <About />
        </div>
        <div style={{ backgroundColor: 'transparent' }}>
          <ThePlan />
        </div>
        <div className="box-shadow" style={{ backgroundColor: '#e3d1b5' }}>
          <Location />
        </div>
        <div style={{ backgroundColor: 'transparent' }}>
          <Faq />
        </div>
        <div id="rsvp-container" className="box-shadow" style={{ /* gradient defined in css */ }}>
          <Rsvp />
        </div>
        <div style={{ backgroundColor: 'transparent' }}>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Wedding;
