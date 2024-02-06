const mongoose = require('mongoose');
const setting = require('./../../config/schemaConfig')


const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        default: ''
    },
},
    setting);



const answerShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        default: 0
    }
}, {
    _id: false
})

const questionSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    image: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true,
    },
    answers: [answerShema],
},
    setting);


const Task = mongoose.model('Task', taskSchema);

const Question = mongoose.model('Question', questionSchema);


module.exports = {
    Task,
    Question
};