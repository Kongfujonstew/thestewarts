export default function() {

  console.log('* [example 1.1] sending test email');

  // Require'ing module and setting default options

  var send = require('gmail-send')({
  //var send = require('../index.js')({
    user: process.env.US_EM_A,
    // user: credentials.user,                  // Your GMail account used to send emails
    pass: process.env.US_EM_P,
    // pass: credentials.pass,                  // Application-specific password
    to:   'someemail@asldjflkasjdflas.com',
    // to:   credentials.user,                  // Send to yourself
                                             // you also may set array of recipients:
                                             // [ 'user1@gmail.com', 'user2@gmail.com' ]
    // from:    credentials.user,            // from: by default equals to user
    // replyTo: credentials.user,            // replyTo: by default undefined
    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
    subject: 'test subject 2',
    text:    'gmail-send example 2',         // Plain text
    //html:    '<b>html text</b>'            // HTML
  });


  // Override any default option and send email

  console.log('* [example 1.1] sending test email');


  send(function (err, res) {
    console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
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
