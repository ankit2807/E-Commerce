const router = require('express').Router();
const { updateUser, deleteUser, getUser, getUsers } = require("../controller/admin");
const { verifyTokenAndAdmin } = require('../utils/verifyToken')

//UPDATE
router.put("/:id", verifyTokenAndAdmin, updateUser);

//DELETE
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

//GET
router.get("/:id", verifyTokenAndAdmin, getUser);

//GET ALL
// router.get("/", verifyTokenAndAdmin, getUsers);

module.exports = router;