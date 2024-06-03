const mongoose = require("mongoose");
const validator = require("validator");

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
                required: true,
            },
            quantity: {
                type: Number,
                default: 1,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: "pending",
        enum:["pending","completed","cancelled","delivered","shipped"],
    },
},{ timestamps: true });

const cart = new mongoose.model("cart", cartSchema);
module.exports = cart;