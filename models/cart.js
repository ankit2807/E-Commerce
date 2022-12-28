const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    products: [{
        productId: {
            type: String,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    },
    ],
    amount: {
        type: Number,
        required: true
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);