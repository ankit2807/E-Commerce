const Admin = require("../models/admin");

//update
const updateUser = async (req, res) => {
    try {
        const updatedUser = await Admin.findByIdAndUpdate(req.params.id,
            { $set: req.body },
            { new: true }
        );
        return res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
};

//delete
const deleteUser = async (req, res) => {
    try {
        await Admin.findByIdAndDelete(req.params.id);
        return res.status(200).json("User has been deleted.");
    } catch (err) {
        return res.status(500).json(err);
    }
};

//get single user
const getUser = async (req, res) => {
    try {
        const user = await Admin.findById(req.params.id);
        const { password, ...others } = user._doc;
        return res.status(200).json(others);
    } catch (err) {
        return res.status(500).json(err);
    }
};

module.exports = {
    updateUser,
    deleteUser,
    getUser
}
