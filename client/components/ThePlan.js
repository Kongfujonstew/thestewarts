import React from 'react';

class ThePlan extends React.Component {

  render() {
    return (
      <div id="theplan">
        <span style={{ position: 'absolute', top: '12px;'}}>further details forthcoming . . .</span>
        <h2 style={{ marginTop: '4px'}}>Afternoon Friday, July 24</h2>
        <h3>WELCOME BBQ</h3>
        <h2>Morning Saturday, July 25</h2>
        <span>there may be 'optional' activities at this time</span>
        <h2>Afternoon Saturday, July 25</h2>
        <h3 style={{ marginBottom: '0'}}>WEDDING CEREMONY</h3>
        <h3>CABLE CAR TOUR OF SAN FRANCISCO</h3>
        <span>a 2 hour scenic drive to . . . </span>
        <h2>Evening Saturday, July 25</h2>
        <h3>DINNER RECEPTION IN SAN FRANCISCO</h3>
        <img id="logo" src="/public/images/classic-logo.jpg"/>
        <img id="car" src="/public/images/classic-car.jpg"/>
      </div>
    )
  }
}

export default ThePlan;
