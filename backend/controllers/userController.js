const User = require('../models/user');
const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'});
}

const login = async(req, res) => {
    const {username, password} = req.body;
    try {
        const user = await User.login(username, password);
        const token = generateToken(user);
        res.json({user, token});
    
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const register = async(req, res) => {
    const {username, password} = req.body;
    try{
        const newUser = new User({username, password});
        newUser.password = await User.encryptPassword(username, password);
        await newUser.save();
        const token = generateToken(newUser);
        res.json({newUser, token});
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {login, register};