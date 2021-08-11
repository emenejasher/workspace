const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema({
   name: String,
   price: String,
   Sub_Description: String,
   Description: String,
   category: String,
   published: Boolean
 },
 { timestamps: true }
     
  );

  const User = mongoose.model("User", userSchema);

  module.exports = User;