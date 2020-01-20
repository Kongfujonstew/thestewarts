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
          NO dress code.  BUT We'll be OUTSIDE for 2 hours during the cable car ride, and it is very chilly in July.  A JACKET OR HOODIE at minimum is recommended.
        </span>
        <h3>HOTEL</h3>
        <span>
          We're working on this but will keep you posted ~
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
