const nodemailer = require('nodemailer');
const pug = require('pug');
const { convert } = require('html-to-text');
const dotenv = require('dotenv');

class Email {
  constructor(user, url) {
    dotenv.config({ path: './config.env' });

    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = process.env.EMAIL_FROM;
  }

  newTransport() {
    let transporterOptions;
    if (process.env.NODE_ENV === 'production') {
      transporterOptions = {
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD,
        },
      };
    } else {
      transporterOptions = {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      };
    }
    console.error('transporterOptions:', transporterOptions);
    return nodemailer.createTransport(transporterOptions);
  }

  async send(template, subject) {
    try {
      const emailTemplatePath = `${__dirname}/../views/email/${template}.pug`;
      const html = pug.renderFile(emailTemplatePath, {
        firstName: this.firstName,
        url: this.url,
        subject,
      });

      const mailOptions = {
        from: this.from,
        to: this.to,
        subject,
        html,
        text: convert(html),
      };

      const transporter = this.newTransport();
      const info = await transporter.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
  }

  async sendWelcome() {
    try {
      await this.send('welcome', 'Welcome to the Natours Family!');
    } catch (error) {
      throw error;
    }
  }

  async sendPasswordReset() {
    try {
      await this.send(
        'passwordReset',
        'Your password reset token (valid for only 10 minutes)',
      );
    } catch (error) {
      console.error('Error sending password reset email:', error);
      throw error;
    }
  }
}

module.exports = Email;
