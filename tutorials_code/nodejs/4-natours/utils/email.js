const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1) Create a test account
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Wrap in an async IIFE so we can use await.
  (async () => {
    const info = await transporter.sendMail({
      from: '"Mohammed Yazji" <mahmadyazji@gmail.com>',
      to: options.email,
      subject: options.subject,
      text: options.message,
      // html:
    });

    console.log('Message sent:', info.messageId);
  })();
};

module.exports = sendEmail;
