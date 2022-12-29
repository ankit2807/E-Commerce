const Product = require('../models/product');

//Create
const createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    try {
        const savedProduct = await newProduct.save();
        return res.status(200).json(savedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Update
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json(updatedProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Delete
const deleteProduct = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json("Product deleted...");
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get product
const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get all products
const getProducts = async (req, res) => {
    const qNew = req.query.new;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 });
        } else {
            products = await Product.find();
        }
        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//soft delete products count
const softDeleteProducts = async (req, res) => {
    const { id } = req.params;
    const numberDeletedElements = await Product.softDelete({ _id: id })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    res.status(200).send(numberDeletedElements);
};

//soft deleted products 
const findDeletedProduct = async (req, res) => {
    const deletedElements = await Product.findDeleted()
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
    res.status(200).send(deletedElements);
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
    getProduct,
    getProducts,
    softDeleteProducts,
    findDeletedProduct
}