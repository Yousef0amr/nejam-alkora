const wrap = require("express-async-wrapper")
const { Question } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')


const deleteQuestion = wrap(
    async (req, res, next) => {
        const id = req.params.id;

        await Question.findByIdAndDelete(id);
        return Success(res, 'question deleted successfully', null);

    }
)


module.exports = deleteQuestion