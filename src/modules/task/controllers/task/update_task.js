const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')


const updateTask = wrap(
    async (req, res, next) => {
        const value = { ...req.body }


    }
)


module.exports = updateTask