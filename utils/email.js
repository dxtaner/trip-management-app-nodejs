const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Uncomment the lines below and provide necessary environment variables for custom email server configuration
    // host: process.env.EMAIL_HOST,
    // port: process.env.EMAIL_PORT,
  });

  // 2) Define the email options
  const mailOptions = {
    from: `Taner Özer <${process.env.EMAIL_FROM}>`,
    to: options.email,
    subject: options.subject,
    text: options.message,
    // Uncomment the line below and provide an HTML content for HTML emails
    // html: options.html,
  };

  // 3) Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
