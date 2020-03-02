import React from 'react';

class FAQ extends React.Component {

  // FAQ // Enamel or 'title'

  // What to wear
  // Whatever!  We'll be outside for the cable car ride, and San Francisco is usually chilly even in July.  A jacket or hoodie at minimum is recommended.

  // Where to stay
  // We're working on this but will keep you posted.

  // Is there a gift registry?
  // Yes, and it's right here: <Zola link>

  // How should we be in touch ahead of time?
  // Reach out to Jon or Hermann, or send us a note below.

  render() {
    return (
      <div id="faq">
        <h3>DRESS CODE</h3>
        <span>
          Let's call it 'San Francisco semi-formal'.  That means tie or no tie for the gentlemen and . . . well, same for the ladies.  You do you.  We're sure you'll look great.  Jon will wear a blue suit and Hermann a white dress.
        </span>
        <h3>DRESS CODE AGAIN</h3>
        <span>
          Dress warm!  You've been warned.  We'll be OUTSIDE for 2 hours for the cable car ride, and it is VERY chilly in July.  A JACKET OR HOODIE at minimum.
        </span>
        <h3>HOTEL</h3>
        <span>
          We recommend the <a href="https://www.hotelzephyrsf.com/" target="_blank">Hotel Zepher</a>. It's a great location, it's where we'll be for the reception and we have group rates.  You can <a href="https://gc.synxis.com/rez.aspx?Hotel=64626&Chain=8708&arrive=7/22/2020&depart=7/26/2020&adult=1&child=0&group=STEWARTWED" target="_blank">book by clicking right here</a>.
        </span>
        <h3>CONTACT</h3>
        <span>
          Reach out to Jon or Hermann, or send us a note below.
        </span>
      </div>
    );
  }
}

export default FAQ;
