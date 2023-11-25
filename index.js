const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const route = require("./Route");

dotenv.config();
require("./Config");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("", route);

let PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is Running at PORT ${PORT}`));
