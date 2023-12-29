const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;


