const mongoose = require("mongoose");
const validator = require("validator");

const OrderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
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
        // address: {
        //     type: String,
        //     required: true,
        // },
        status: {
            type: String,
            default: "pending",
            enum:["pending","completed","cancelled","delivered","shipped"],
        },
    },{ timestamps: true });

const Order = new mongoose.model("Order", OrderSchema);
module.exports = Order