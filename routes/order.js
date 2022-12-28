const router = require('express').Router();
const { createOrder, updateOrder, deleteOrder, getOrder, getAllOrders } = require("../controller/order");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//create
router.post("/", verifyTokenAndAdmin, createOrder);

//update
router.put("/:id", verifyTokenAndAdmin, updateOrder);

//delete
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);

//get single cart detail
router.get("/find/:id", verifyTokenAndAdmin, getOrder);

//get all cart details
router.get("/", verifyTokenAndAdmin, getAllOrders);

module.exports = router;