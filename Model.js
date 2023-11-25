const mongoose = require("mongoose");
const { getCurrentFormattedTime } = require("./Middleware");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  message: {
    type: String,
  },
  time: {
    type: String,
    default: function () {
      return getCurrentFormattedTime();
    },
  },
});

const ContactForm = mongoose.model("ContactForm", contactSchema);

module.exports = ContactForm;
