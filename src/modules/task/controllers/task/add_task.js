const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')


const addTask = wrap(
    async (req, res, next) => {
        const value = { ...req.body, ...req.files }

    }
)


module.exports = addTask