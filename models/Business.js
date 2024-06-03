const mongoose = require("mongoose");
const validator = require("validator");

const businessSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please tell us your Restaurant name!"],
        unique: true,
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
    location: {
        type: String,
        required: [true, "Please provide your location"],
    },
    timing:{
        Opening: {
            type: String,
            required: [true, "Please provide the opening time"],
        },
        Closing: {
            type: String,
            required: [true, "Please provide the closing time"],
        }
    },
    description: {
        type: String,
        required: [true, "Please provide a description"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});