require("dotenv").config();

const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  auth: {
    user: process.env.ADMIN_EMAIL_ADDRESS,
    pass: process.env.ADMIN_EMAIL_PASS,
  },
  host: process.env.EMAIL_SMTP,
  port: process.env.SMTP_PORT_SSL || 456,
  secure: true,
});

const emailSignUpTemplate = (username, link) => {
  <div>
    <p>Hi {username}</p>
    <p>Click the link to login to the Elite Website: {link}</p>
  </div>;
};

module.exports = { transporter, emailSignUpTemplate };
