const express = require('express');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const checkEmail = require('./controllers/auth/checkEmail');
const verifyEmail = require('../../common/Auth_operation/verifyEmail');
const validateRequest = require('../../middlewares/validateRequest');
const loginSchema = require('../../common/validationsModel/login-schema')
const verifyEmailSchema = require('../../common/validationsModel/verifyEmail-schema')
const checkEmailSchema = require('../../common/validationsModel/checkEmail-schema');
const forgetPassword = require('./controllers/auth/forgetPassword');
const { multerConfig } = require('../../utils/multer');
const restPassword = require('./controllers/auth/restPassword');
const resendCode = require('../../common/Auth_operation/resendCode');
const restPasswordSchema = require('../../common/validationsModel/restPassword');
const changePasswordSchema = require('../../common/validationsModel/changePassword');
const changePassword = require('./controllers/auth/changePassword');
const playerShema = require('./models/playerSchema');
const getPlayer = require('./controllers/get_player');
const playerRouter = express.Router();



playerRouter.route('/register')
    .post(multerConfig().fields([{ name: 'logo', maxCount: 1 }]), validateRequest(playerShema), register);

playerRouter.route('/login')
    .post(multerConfig().array(), validateRequest(loginSchema), login);

playerRouter.route('/check-email')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), checkEmail);

playerRouter.route('/verify-email')
    .post(multerConfig().array(), validateRequest(verifyEmailSchema), verifyEmail);

playerRouter.route('/forget-password')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), forgetPassword);

playerRouter.route('/rest-password')
    .post(multerConfig().array(), validateRequest(restPasswordSchema), restPassword);


playerRouter.route('/change-password')
    .post(multerConfig().array(), validateRequest(changePasswordSchema), changePassword);

playerRouter.route('/resend-code')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), resendCode);



playerRouter.route('/current-player')
    .get(getPlayer);



module.exports = playerRouter;
