const express = require('express');
const { multerConfig } = require('../../utils/multer');
const validateRequest = require('./../../middlewares/validateRequest')
const taskSchema = require('./models/taskSchema')
const addTask = require('./controllers/task/add_task')
const getAllTasks = require('./controllers/task/getAllTasks')
const deleteTask = require('./controllers/task/delete_task')
const updateTask = require('./controllers/task/update_task');
const addQuestion = require('./controllers/question/add_question')
const deleteQuestion = require('./controllers/question/delete_question')
const updateQuestion = require('./controllers/question/update_question');
const questionSchema = require('./models/questionSchema');
const getTask = require('./controllers/task/getTask');
const getPassedTasks = require('./controllers/task/getPassedTasks');
const addPassedTasks = require('./controllers/task/add_passed_task');
const taskRouter = express.Router();



taskRouter.route('/')
    .post(multerConfig().fields([{ name: 'image', maxCount: 1 }]), validateRequest(taskSchema), addTask)
    .get(getAllTasks)

taskRouter.route('/passed-tasks')
    .get(getPassedTasks)
    .post(multerConfig().array(''), addPassedTasks)

taskRouter.route('/:id')
    .get(getTask)
    .delete(deleteTask)
    .patch(updateTask);


taskRouter.route('/:id/questions')
    .post(multerConfig().fields([{ name: 'image', maxCount: 1 }]), validateRequest(questionSchema), addQuestion);


taskRouter.route('/questions/:id')
    .delete(deleteQuestion)
    .patch(updateQuestion);





module.exports = taskRouter;