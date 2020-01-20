import React from 'react';

class Location extends React.Component {
  constructor() {
    super();
    this.state = { width: '300px', waiting: false }
  }

  componentDidMount() {
    console.log('location cdm')
    // window.onresize = this.handleResize;
    window.addEventListener('resize', this.handleResize);
    this.resize();

  }

  handleResize = () => {
    const { waiting } = this.state;
    if (!waiting) {
      this.setState({ waiting: true });
      // wait between resizes
      setTimeout(this.resize, 300);
    }
  }

  resize = () => {
    this.setState({ waiting: false, width: this.getContainerWidth() });
  }

  getContainerWidth = () => {
    const container = document.getElementById('location') || {};
    return container.clientWidth || '300px';
  }

  render() {
    const { width } = this.state;

    return (
      <div id="location">
        <div className="text">
          <span>Swedenborgian Church</span>
          <span>2107 Lyon Street</span>
          <span>San Francisco, California</span>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.987260667965!2d-122.44847528404276!3d37.790338319035705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580cd2eb55531%3A0xa45d8db1e8a16b7b!2sSWEDENBORGIAN%20CHURCH%20of%20San%20Francisco!5e0!3m2!1sen!2sus!4v1578611280889!5m2!1sen!2sus" frameBorder="0" allowFullScreen={true}
          style={{ width, height: '45vh', border: 0 }}
          className="box-shadow"
        ></iframe>
      </div>
    );
  }
}

export default Location;
