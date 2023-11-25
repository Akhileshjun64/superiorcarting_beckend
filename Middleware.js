const nodemailer = require("nodemailer");

// Nodemailer middleware
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "akhileshjun64@gmail.com", // Replace with your email
    pass: "ksxmafgkoepuvioa", // Replace with your password
  },
});

module.exports = {
  transporter,
};
