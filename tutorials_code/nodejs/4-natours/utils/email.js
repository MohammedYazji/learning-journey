// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');
const pug = require('pug');
// eslint-disable-next-line import/no-extraneous-dependencies
const { htmlToText } = require('html-to-text');

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.url = url;
    this.from = `Seb <${process.env.EMAIL_FROM}>`;
  }
  // eslint-disable-next-line lines-between-class-members
  newTransport() {
    if (process.env.NODE_ENV === 'production') {
      return nodemailer.createTransport({
        // service: 'Brevo'
        host: process.env.BREVO_EMAIL_HOST,
        port: process.env.BREVO_EMAIL_PORT,
        auth: {
          user: process.env.BREVO_USERNAME,
          pass: process.env.BREVO_PASSWORD,
        },
      });
    }

    return nodemailer.createTransport({
      host: process.env.BREVO_EMAIL_HOST,
      port: process.env.BREVO_EMAIL_PORT,
      auth: {
        user: process.env.BREVO_USERNAME,
        pass: process.env.BREVO_PASSWORD,
      },
    });
  }
  // Send the actual email
  // eslint-disable-next-line lines-between-class-members
  async send(template, subject) {
    //1) Render HTML based on a pug template
    const html = pug.renderFile(`${__dirname}/../views/email/${template}.pug`, {
      firstName: this.firstName,
      url: this.url,
      subject,
    });
    //2) Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html: html,
      text: htmlToText(html),
      //html:
    };

    // 3) Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send('welcome', 'Welcome to the Natours Family!');
  }

  async sendPasswordReset() {
    await this.send(
      'passwordReset',
      'Your password reset token (valid for only 10 minutes).',
    );
  }
};
