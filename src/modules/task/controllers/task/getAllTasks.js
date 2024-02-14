const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const Player = require('./../../../player/player.model')
const { Success } = require("../../../../utils/apiResponse")


const getAllTasks = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)
        const tasks = await Task.find({}, { createdAt: false, duration: false, description: false, position: false })

        return Success(res, 'OK', { tasks })
    }
)


module.exports = getAllTasks