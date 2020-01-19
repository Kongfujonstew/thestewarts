import React from 'react';

class About extends React.Component {

  render() {
    return (
      <div id="about">
        <h2>It happened one day in Beijing</h2>
        <div className="text">
          <p>
            She grew up between China and Austria. He grew up between Asia and the US.
          </p>
          <p>
            Then in early 2015 they met at a Salsa dance club.
            She still dances very well.  He sticks to Bachata.
          </p>
          <p>
            Now, they are bringing their lives together in San Francisco, California.  And they can't wait.
          </p>
        </div>
        <img id="hermann" src="/public/images/hermann.jpg"/>
      </div>
    );
  }
}

export default About;
