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

taskSchema.virtual('questions', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'task'
})

const answerShema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        default: 0
    }
},
    setting)

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

const passedTaskSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true,
    },
    player: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
},
    setting);



const Task = mongoose.model('Task', taskSchema);

const Question = mongoose.model('Question', questionSchema);

const PassedTask = mongoose.model('PassedTask', passedTaskSchema);


module.exports = {
    Task,
    Question,
    PassedTask
};