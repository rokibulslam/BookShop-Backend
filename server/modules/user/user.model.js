const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const UserSchema = mongoose.Schema(
  {
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    Email: { type: String, required: true, unique: true },
    CreatedAt: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);
UserSchema.methods.comparePassword = async function (pass) {
  return await bcrypt.compare(pass, this.Password);
};
UserSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
});
const User = mongoose.model("user", UserSchema);

module.exports = User;


