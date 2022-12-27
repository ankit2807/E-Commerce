const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        maxLength: [30, "Title cannot exceed 30 characters"],
        minLength: [4, "Title should have more than 4 characters"],
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: Object,
        default: {},
    },
    sku: {
        type: String,
        required: true,
        default: "SKU",
        trim: true,
    },
    category: {
        type: String,
        required: [true, "Please Enter Product Category"],
    },
    quantity: {
        type: Number,
        required: [true, "Please add a quantity"],
        trim: true,
    },
    price: {
        type: Number,
        required: true,
        maxLength: [8, "Price cannot exceed 8 figures"],
    },
}, { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);


//soft delete
//feature(crud operation)
//measurement type
//category(crud operation)