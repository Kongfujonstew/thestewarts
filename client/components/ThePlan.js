import React from 'react';

class ThePlan extends React.Component {

  render() {
    return (
      <div id="theplan">
        <h2>Afternoon Friday, July 24</h2>
        <h3>WELCOME BBQ</h3>
        <h2>Afternoon Saturday, July 25</h2>
        <h3 style={{ marginBottom: '0'}}>WEDDING CEREMONY</h3>
        <h3>CABLE CAR TOUR OF SF</h3>
        <span>2-hour charted tour through SF </span>
        <h2>Evening Saturday, July 25</h2>
        <h3>DINNER RECEPTION AT THE HOTEL ZEPHYR</h3>
        <img id="logo" src="/public/images/classic-logo.jpg"/>
        <img id="car" src="/public/images/classic-car.jpg"/>
      </div>
    );
  }
}

export default ThePlan;
