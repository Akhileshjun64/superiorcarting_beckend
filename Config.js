const mongoose = require("mongoose");

const username = process.env.myusername;
const password = process.env.password;

// const cloudDB = `mongodb+srv://${username}:${password}@17hjuly2023.foa55ch.mongodb.net/thebettle`;
const localDB = "mongodb://0.0.0.0:27017/08sep_contact_data";

mongoose
  .connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
