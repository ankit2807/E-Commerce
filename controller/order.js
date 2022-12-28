const Order = require('../models/order');

//Create
const createOrder = async (req, res) => {
    const newOrder = new Order(req.body);
    try {
        const savedOrder = await newOrder.save();
        return res.status(200).json(savedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Update
const updateOrder = async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id,
            {
                $set: req.body
            },
            { new: true }
        );
        return res.status(200).json(updatedOrder);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Delete
const deleteOrder = async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        return res.status(200).json("Order deleted...");
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get user orders
const getOrder = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId });
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        return res.status(200).json(orders);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    createOrder,
    updateOrder,
    deleteOrder,
    getOrder,
    getAllOrders
}