const wrap = require('express-async-wrapper')
const { Success, ApiError } = require('./../../../../utils/apiResponse')
const Player = require('./../../player.model')
const hashPassword = require("./../../../../utils/hashPassword")
const generateToken = require('./../../../../utils/generateToken')
const checkEmailDB = require('../../../../common/DB_operation/checkEmailDB')
const uploadMedia = require('./../../../../utils/uploadMedia')

const register = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files
        const isPlayerExist = await checkEmailDB(Player, value.email)
        if (isPlayerExist) {
            return next(new ApiError("Email is already registered", 400));
        }

        value.logo = await uploadMedia(files.logo[0].path, 'negamAlkora/players/logo')
        value.password = await hashPassword(value.password)

        const player = new Player({
            ...value
        });

        await player.save();
        const payload = { id: player._id, role: player.role };
        const token = await generateToken(payload, process.env.ACCESS_TOKEN_SECRET);

        return Success(res, "OK", { token }, 201);
    }
)

module.exports = register