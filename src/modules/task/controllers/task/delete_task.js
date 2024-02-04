const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')


const deleteTask = wrap(
    async (req, res, next) => {


    }
)


module.exports = deleteTask