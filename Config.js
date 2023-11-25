const mongoose = require("mongoose");
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.Cloud_DB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    // Optionally, you can throw the error to be caught by the calling function
    throw error;
  }
};

// Call the function to connect to the database
connectToDatabase();
