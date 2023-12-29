const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.2efaz.mongodb.net/assignment5?retryWrites=true&w=majority`;
exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    // const connect = await mongoose.connect(process.env.DB_URL);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log("Database Error", error.message);
    process.exit();
  }
};
