const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const Player = require('./../../../player/player.model')


const getAllTasks = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)
        const tasks = await Task.find({ position: player.primary_position }, { createdAt: false })
        return Success(res, 'OK', { tasks })
    }
)


module.exports = getAllTasks