const router = require('express').Router();
const { createCategory, updateCategory, deleteCategory, getCategory, getCategories } = require("../controller/category");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//create
router.post("/", verifyTokenAndAdmin, createCategory);

//update
router.put("/:id", verifyTokenAndAdmin, updateCategory);

//delete
router.delete("/:id", verifyTokenAndAdmin, deleteCategory);

//get single category
router.get("/find/:id", getCategory);

//get all categories
router.get("/", getCategories);

module.exports = router;