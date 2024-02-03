const mongoose = require('mongoose');
const setting = require('../../config/schemaConfig');

const coachSchema = new mongoose.Schema({
    logo: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female'],
    },
    birthDate: {
        type: Date,
        required: true,
    },
    role: {
        type: String,
        default: 'coach',
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    },
},
    setting);

module.exports = mongoose.model('Coach', coachSchema);
