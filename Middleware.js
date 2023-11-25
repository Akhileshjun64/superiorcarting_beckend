const nodemailer = require("nodemailer");
require("dotenv").config();

// Nodemailer middleware
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

// time
function getCurrentFormattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Add leading zero if needed
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  // Get the date components
  const day = now.getDate();
  const month = now.getMonth() + 1; // Months are 0-indexed
  const year = now.getFullYear();

  // Format the date components
  const formattedDate = `${day}/${month}/${year}`;

  // Construct the formatted time string
  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${ampm} ${formattedDate}`;

  return formattedTime;
}

module.exports = {
  transporter,
  getCurrentFormattedTime,
};
