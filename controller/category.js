const Category = require('../models/category');

//Create
const createCategory = async (req, res) => {
    const newCategory = new Category(req.body);
    try {
        const savedCategory = await newCategory.save();
        return res.status(201).json(savedCategory);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//update
const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json(updatedCategory);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Delete
const deleteCategory = async (req, res) => {
    try {
        await Category.findByIdAndDelete(req.params.id);
        return res.status(200).json("Product deleted...");
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get category
const getCategory = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        return res.status(200).json(category);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get all products
const getCategories = async (req, res) => {
    const qNew = req.query.new;
    try {
        let categories;

        if (qNew) {
            categories = await Category.find().sort({ createdAt: -1 });
        } else {
            categories = await Category.find();
        }
        return res.status(200).json(categories);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    createCategory,
    updateCategory,
    deleteCategory,
    getCategory,
    getCategories
}

