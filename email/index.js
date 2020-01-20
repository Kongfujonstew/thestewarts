export default function(req, res, next) {

  console.log('* [example 1.1] sending test email, user: ', process.env.US_EM_A);
  console.log('* [example 1.1] sending test email, pass: ', process.env.US_EM_P);

  console.log('LKSJDLKFJSLKDFJ$$$$$$$$$$$$$$$$$$$$$$$$$$$$')
  console.log(req.body)
  let text = '';
  const reqBodyKeys = Object.keys((req.body || {}));
  const isRSVP = reqBodyKeys.includes('rsvpyes');
  reqBodyKeys.forEach(field => {
    text += `${field}: ${req.body[field]}\n`;
  });
  console.log('text: ', text)
  // Require'ing module and setting default options

  var send = require('gmail-send')({
  //var send = require('../index.js')({
    user: 'us@thestewarts.family',
    // user: credentials.user,                  // Your GMail account used to send emails
    pass: 'Bigstewartsswissarmy1',
    // pass: credentials.pass,                  // Application-specific password
    to:   'jonstew@gmail.com',
    // to:   credentials.user,                  // Send to yourself
                                             // you also may set array of recipients:
                                             // [ 'user1@gmail.com', 'user2@gmail.com' ]
    // from:    credentials.user,            // from: by default equals to user
    // replyTo: credentials.user,            // replyTo: by default undefined
    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
    subject: `It's a${isRSVP ? 'n RSVP' : ' message'}!`,
    text: text      // Plain text, see above
    //html:    '<b>html text</b>'            // HTML
  });

  console.log('* [example 1.1] sending test email');


  send((sendError, sendResponse) => {
    console.log('send() callback err:', sendError, '; res:', sendResponse);
    if (sendError) {
      res.status(500).json({ error: sendError });
    } else {
      res.json({ sent: true });
    }
  });
}


// Set additional file properties
//
// console.log('* [example 1.2] sending test email');
//
// send({ // Overriding default parameters
//   subject: 'attached '+filepath,              // Override value set as default
//   files: [                                    // Array of files to attach
//     {
//       path: filepath,
//       filename: 'filename-can-be-changed.txt' // You can override filename in the attachment if needed
//     }
//   ],
// }, function (err, res) {
//   console.log('* [example 1.2] send() callback returned: err:', err, '; res:', res);
// });
