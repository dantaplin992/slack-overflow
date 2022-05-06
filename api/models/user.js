const mongoose = require("mongoose"); 

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    displayName: String,
    icon: String,
    password: String,
    email: String
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
