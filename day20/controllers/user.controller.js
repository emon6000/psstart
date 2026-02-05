const User = require('../models/user.model');
const { v4: uuidv4 } = require('uuid');


const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getUserById = async (req, res) => {
    try {
    const user = await User.findOne({ id: req.params.id });
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
    } catch (err) {
        console.error('Error fetching user by ID:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const createUser = async (req, res) => {
    try {
    const newUser = new User({
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email
    });
    await newUser.save();
    res.status(201).json(newUser);
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateUser = async (req, res) => {
    try{
        const user = await User.findOne({ id: req.params.id });
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;
        await user.save();
        res.status(200).json(user);
    } catch (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const deleteUser = async (req, res) => {
    try{
        await User.deleteOne({ id: req.params.id });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};