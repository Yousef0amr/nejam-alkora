const wrap = require("express-async-wrapper")
const { Task } = require('./../../task.model')
const Player = require('./../../../player/player.model')
const { Success } = require("../../../../utils/apiResponse")


const getTask = wrap(
    async (req, res, next) => {
        const player = await Player.findById(req.userId)
        const tasks = await Task.findOne({}, { createdAt: false }).populate([{
            path: 'questions'
        }])
        console.log(tasks)
        return Success(res, 'OK', { tasks })
    }
)


module.exports = getTask