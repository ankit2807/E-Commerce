const mongoose = require('mongoose');
const { softDeletePlugin } = require('soft-delete-plugin-mongoose');

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
        type: String,
        default: "",
    },
    sku: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
        required: true
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

productSchema.plugin(softDeletePlugin);

module.exports = mongoose.model("Product", productSchema);


//soft delete(done)
//feature(crud operation)
//measurement type
//category(crud operation)(done)