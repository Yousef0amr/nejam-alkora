const wrap = require("express-async-wrapper")
const { PassedTask } = require('./../../task.model')
const Player = require('./../../../player/player.model')
const { Success } = require("../../../../utils/apiResponse")


const getPassedTasks = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)
        const tasks = await PassedTask.find({ player: player.id }, { createdAt: false, player: false }).populate([
            {
                path: 'task',
                select: 'title'
            }
        ])
        return Success(res, 'OK', { tasks })
    }
)


module.exports = getPassedTasks