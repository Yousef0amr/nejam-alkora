const express = require('express');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const checkEmail = require('./controllers/auth/checkEmail');
const verifyEmail = require('../../common/Auth_operation/verifyEmail');
const validateRequest = require('../../middlewares/validateRequest');
const loginSchema = require('../../common/validationsModel/login-schema')
const verifyEmailSchema = require('../../common/validationsModel/verifyEmail-schema')
const checkEmailSchema = require('../../common/validationsModel/checkEmail-schema');
const validatorRegister = require('./validators/validator-register');
const forgetPassword = require('./controllers/auth/forgetPassword');
const { multerConfig } = require('../../utils/multer');
const restPassword = require('./controllers/auth/restPassword');
const resendCode = require('../../common/Auth_operation/resendCode');
const restPasswordSchema = require('../../common/validationsModel/restPassword');
const changePasswordSchema = require('../../common/validationsModel/changePassword');
const changePassword = require('./controllers/auth/changePassword');
const coachRouter = express.Router();



coachRouter.route('/register')
    .post(multerConfig().fields({ name: 'logo', maxCount: 1 }), validatorRegister(), register);

coachRouter.route('/login')
    .post(multerConfig().array(), validateRequest(loginSchema), login);

coachRouter.route('/check-email')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), checkEmail);

coachRouter.route('/verify-email')
    .post(multerConfig().array(), validateRequest(verifyEmailSchema), verifyEmail);

coachRouter.route('/forget-password')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), forgetPassword);

coachRouter.route('/reset-password')
    .post(multerConfig().array(), validateRequest(restPasswordSchema), restPassword);


coachRouter.route('/change-password')
    .post(multerConfig().array(), validateRequest(changePasswordSchema), changePassword);

coachRouter.route('/resend-code')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), resendCode);



module.exports = coachRouter;
