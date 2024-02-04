const mongoose = require('mongoose');

// Define the Task schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
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
});


const questionSchema = new mongoose.Schema({
    taskId: {
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
    answers: [
        {
            title: {
                type: String,
                required: true,
            },
            rate: {
                type: Number,
                default: 0
            }
        },
    ],
});


const Task = mongoose.model('Task', taskSchema);

const Question = mongoose.model('Question', questionSchema);


module.exports = {
    Task,
    Question
};