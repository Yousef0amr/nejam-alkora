const wrap = require("express-async-wrapper")
const { PassedTask } = require('./../../task.model')
const Player = require('./../../../player/player.model')
const { Success, ApiError } = require("../../../../utils/apiResponse")


const addPassedTasks = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)
        const id = req.body.id
        const task = await PassedTask.findById(id);

        if (task) {
            task.degree = req.body.degree
        } else {
            const newTask = new PassedTask(
                {
                    degree: req.body.degree,
                    task: id,
                    player: player.id
                }
            )
            await newTask.save();
        }

        return Success(res, 'OK', null)
    }
)


module.exports = addPassedTasks