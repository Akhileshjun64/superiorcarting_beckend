const express = require("express");
const route = express.Router();
const controller = require("./Controller");

// const { transporter, upload, jwtToken } = require("../middleware/middleware");

route.post("/contact", controller.contact);

module.exports = route;
