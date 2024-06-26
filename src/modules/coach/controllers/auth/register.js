const wrap = require('express-async-wrapper')
const { Success, ApiError } = require('./../../../../utils/apiResponse')
const Coach = require('./../../coach.model')
const hashPassword = require("./../../../../utils/hashPassword")
const generateToken = require('./../../../../utils/generateToken')
const checkEmailDB = require('../../../../common/DB_operation/checkEmailDB')
const uploadMedia = require('./../../../../utils/uploadMedia')
const register = wrap(
    async (req, res, next) => {
        const value = { ...req.body }

        const isExist = await checkEmailDB(Coach, value.email)
        if (isExist) {
            return next(new ApiError("Email is already registered", 400));
        }


        value.password = await hashPassword(value.password)
        value.logo = await uploadMedia(req.files.logo[0], 'negam-alkor/coachs/logo')
        const coach = new Coach({
            ...value
        });
        await coach.save();

        const payload = { id: coach._id, role: coach.role };
        const token = await generateToken(payload, process.env.ACCESS_TOKEN_SECRET);

        return Success(res, "OK", { token }, 201);
    }
)

module.exports = register