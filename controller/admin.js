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

//Logout user
const logout = async (req, res) => {
    try {
        const authHeader = req.headers['cookie'];
        if (!authHeader) return res.sendStatus(204); // No content
        const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
        const accessToken = cookie.split(';')[0];
    } catch (error) {

    }
}

module.exports = {
    updateUser,
    deleteUser,
    getUser,
}
