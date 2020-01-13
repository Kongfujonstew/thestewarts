import React from 'react';

class Welcome extends React.Component {

  // Welcome // 'some script'

  // HERMANN AND JON ARE GETTING MARRIED // Enamel

  // July 25, 2020 • SAN FRANCISCO, CA // Baskervville

  // Swedenborgian Church // MrsEavesItalic
  // 2107 Lyon St

  render() {
    return (
      <div id="welcome" className="box-shadow">
          <h2>Herman</h2>
          <h4>and</h4>
          <h2>Jon</h2>
          <h4>are</h4>
          <h3>Getting Married</h3>
        <img id="skyline" src="public/images/skyline.png" />
      </div>
    )
  }
}

export default Welcome;
