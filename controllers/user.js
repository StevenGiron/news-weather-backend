const { response, request } = require('express');
const User = require('../models/user');


const login = async(req = request, res = response) => {
    const userDb = await getUserByUsername(req, res);
    const { password } = req.body;
    if (userDb.password !== password) {
        return res.status(400)
            .send({
                errors: [{
                    msg: 'Invalid password'
                }]
            });
    }
    res.json({
        username: userDb.username,
        password: userDb.password
    });
};

const getUserByUsername = async(req = request, res = response) => {
    const { username } = req.body;
    const userDb = await User.findOne({ username });

    return userDb;

};

const signup = async(req, res = response) => {
    const { username, password } = req.body;
    const user = new User({ username, password });

    await user.save();

    res.status(201).json({
        msg: "User created",
        username,
        password
    });
};

module.exports = {
    signup,
    login
};