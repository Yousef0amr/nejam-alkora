const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')
const uploadMedia = require('./../../../../utils/uploadMedia')

const addTask = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files

        value.image = await uploadMedia(files.image[0].path, 'nejamAlkora/tasks')

        const task = new Task(
            { ...value }
        );

        await task.save();

        return Success(res, 'OK', { task }, 201)
    }
)


module.exports = addTask