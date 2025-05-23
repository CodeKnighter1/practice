const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const  User = model('User', userSchema);

module.exports = User;