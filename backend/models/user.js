const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
});

userSchema.statics.encryptPassword = async function(email, password) {
    if(!email || !password) {
        throw new Error('Email and password are required');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Invalid email');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password is not strong enough');
    }
    const exsisitingUser = await this.findOne({username: email});
    if (exsisitingUser) {
        throw new Error('Email already in use');
    }
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(password, salt);   
}

userSchema.statics.login = async function(email, password) {
    if(!email || !password) {
        throw new Error('Email and password are required');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Invalid email');
    }
    const user = await this.findOne({username: email});
    if (!user) {
        throw new Error('Email not found');
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Incorrect password');
    }
    return user;
}

const User = mongoose.model('User', userSchema);
module.exports = User;
