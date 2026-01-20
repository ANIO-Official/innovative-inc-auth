const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});
 
// Set up pre-save middleware to create password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) { //check if new or updates
    const saltRounds = 10; //10 is the base. But you can go further
    this.password = await bcrypt.hash(this.password, saltRounds); //run hash
  }
 
  next();
});
 
//Compile and Export
const User = mongoose.model('User', userSchema);
module.exports = User