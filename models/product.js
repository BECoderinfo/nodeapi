const mongoose = require("mongoose");
const { type } = require("os");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: [true,"price must be provided"],
    },
    featured: {
        type: Boolean,
        default: false,
        // required: true,
    },
    rating: {
        type: Number,
        default: 4.9,
        // required: [true,"price must be provided"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    RestaurantName: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: {
            values: ["laptop", "mobile", "tablet"],
            message: "{VALUE} is not supported",
        },
    },
});

module.exports = mongoose.model("Product", productSchema);