const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your name!"],
        minlength: 3,
        maxlength: 50,
    },
    email: {
        type: String,
        required: [true, "Please provide your email"],
        unique: [true, "Email already exists"],
        lowercase: true,
        validate: [validator.isEmail, "Please provide a valid email"],
    },
    phone: {
        type: String,
        required: [true, "Please provide your phone number"],
        validate: [validator.isMobilePhone, "Please provide a valid phone number"],
        minlength: 10,
        maxlength: 10,
    },
    address: {
        type: String,
        required: [true, "Please provide your address"],
    },
});

const User = new mongoose.model("User", userSchema);
module.exports = User;