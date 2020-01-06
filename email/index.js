export default function(req, res, next) {

  console.log('* [example 1.1] sending test email, user: ', process.env.US_EM_A);
  console.log('* [example 1.1] sending test email, pass: ', process.env.US_EM_P);

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
    subject: `It's an RSVP!`,
    text:    `It's an RSVP!`,         // Plain text
    //html:    '<b>html text</b>'            // HTML
  });

  console.log('* [example 1.1] sending test email');


  send({ text: `It's an RSVP! 2` }, function (sendError, sendResponse) {
    console.log('* [example 1.1] send() callback returned: err:', sendError, '; res:', sendResponse);
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
