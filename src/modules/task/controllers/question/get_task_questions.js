const wrap = require("express-async-wrapper")
const { Task, Question } = require('./../../task.model')
const { Success } = require("../../../../utils/apiResponse")

const getTaskQuestions = wrap(
    async (req, res, next) => {

        const questions = await Question.find({ task: req.params.id }, { createdAt: false })
        return Success(res, 'OK', { questions })
    }
)

module.exports = getTaskQuestions

