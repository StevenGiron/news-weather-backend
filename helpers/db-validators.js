const User = require("../models/user")

const userNotExist = async(username) => {

    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User does not exist');
    }
};
const userExists = async(username) => {

    const user = await User.findOne({ username });
    if (user) {
        throw new Error('Username already exists');
    }
};



module.exports = {
    userNotExist,
    userExists
};