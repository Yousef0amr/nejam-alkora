const mongoose = require('mongoose');
const setting = require('../../config/schemaConfig');

const playerSchema = new mongoose.Schema({
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
    skills: {
        primary_position: {
            type: String,
            default: 'Not specified',
        },
        secondary_position: {
            type: String,
            default: 'Not specified',
        },
        speed: String,
        shooting: String,
        defense: String,
        physical: String,
        skill: String
    },
    role: {
        type: String,
        default: 'player',
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    },
},
    setting);

module.exports = mongoose.model('Player', playerSchema);
