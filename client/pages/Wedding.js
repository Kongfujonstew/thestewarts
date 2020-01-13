import React from 'react';
import About from '../components/About';
import Background from '../components/Background';
import Faq from '../components/FAQ';
import Footer from '../components/Footer';
import Location from '../components/Location';
import NavButton from '../components/NavButton';
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
        <img id="tartan" src="/public/images/tartan.jpg"/>
        <div id="welcome-container" style={{ backgroundColor: 'transparent' }}>
          <h1>THE STEWARTS</h1>
          <Welcome />
          <NavButton nextId="about-container" />
        </div>
        <div id="about-container" className="box-shadow" style={{ backgroundColor: 'grey' }}>
          <h1>OUR STORY</h1>
          <About />
          <NavButton nextId="theplan-container" />
        </div>
        <div id="theplan-container" style={{ backgroundColor: 'transparent' }}>
          <h1>EVENT</h1>
          <ThePlan />
          <NavButton nextId="location-container" />
        </div>
        <div id="location-container" className="box-shadow" style={{ backgroundColor: '#e3d1b5' }}>
          <h1>LOCATION</h1>
          <Location />
          <NavButton nextId="faq-container" />
        </div>
        <div id="faq-container" style={{ backgroundColor: 'transparent' }}>
          <h1>FAQ</h1>
          <Faq />
          <NavButton nextId="rsvp-container" />
        </div>
        <div id="rsvp-container" className="box-shadow" style={{ /* gradient defined in css */ }}>
          <h1>RSVP</h1>
          <Rsvp />
          <NavButton nextId="footer-container" />
        </div>
        <div id="footer-container" style={{ backgroundColor: 'transparent' }}>
          <h1>CONTACT US</h1>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default Wedding;
