const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')


const deleteTask = wrap(
    async (req, res, next) => {
        const id = req.params.id;

        await Task.findByIdAndDelete(id);

        return Success(res, 'deleted task suceessfully', null)

    }
)


module.exports = deleteTask