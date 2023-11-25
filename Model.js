const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  message: {
    type: String,
    default: "",
  },
});

const data = mongoose.model("08sep_contact_data", contactSchema);

module.exports = data;
