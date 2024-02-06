const wrap = require("express-async-wrapper")
const Player = require('./../player.model')
const { Success } = require("./../../../utils/apiResponse")
const { playerFilter } = require('./../../../utils/filters')
const getPlayer = wrap(
    async (req, res, next) => {
        const id = req.userId
        const player = await Player.findById(id, { ...playerFilter })
        return Success(res, 'OK', { player })
    }
)

module.exports = getPlayer
