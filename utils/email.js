const nodemailer = require('nodemailer');

// Function to send email using Nodemailer
const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2) Define the email options
  const mailOptions = {
    from: 'Jonas Schmedtmann <hello@jonas.io>', // Sender name and email
    to: options.email, // Receiver email address
    subject: options.subject, // Email subject
    text: options.message, // Email message body
    // html: // If you want to send HTML content, uncomment this line and provide HTML content
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
