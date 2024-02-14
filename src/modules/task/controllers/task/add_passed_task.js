const wrap = require("express-async-wrapper")
const { PassedTask } = require('./../../task.model')
const Player = require('./../../../player/player.model')
const { Success } = require("../../../../utils/apiResponse")


const addPassedTasks = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)

        const task = new PassedTask(
            {
                degree: req.body.degree,
                task: req.body.id,
                player: player.id
            }
        )

        await task.save();

        return Success(res, 'OK', null)
    }
)


module.exports = addPassedTasks