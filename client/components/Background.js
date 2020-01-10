import React from 'react';

class Background extends React.Component {
  constructor(props) {
    super(props);
    // this matches public.scss
    this.cssBackgroundPositionY = -200;
    this.magicNumber = 500;
    // this matches div height
    this.boxHeight = '880';
    this.state = { parallaxOffset: -200 };
  }

  componentDidMount() {
    window.addEventListener('scroll', event => {
      const parallaxOffset = this.cssBackgroundPositionY - this.magicNumber * (window.scrollY / (document.body.scrollHeight - this.boxHeight));
      this.setState({ parallaxOffset });
    });
  }

  render() {
    return (
      <div id="background-container">
        <div id="background" style={{ backgroundPositionY: this.state.parallaxOffset }}/>
      </div>
    )
  }
}

export default Background;
