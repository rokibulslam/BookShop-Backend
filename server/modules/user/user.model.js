const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    email: { type: String, required: true },
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;


