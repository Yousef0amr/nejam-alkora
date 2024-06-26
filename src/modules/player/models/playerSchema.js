const fileSchema = require('../../../common/validationsModel/file-schema')
const Joi = require('joi')

module.exports = Joi.object({
    logo: fileSchema.max(1),
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(11).required(),
    password: Joi.string().required(),
    gender: Joi.string(),
    birthDate: Joi.date(),
    primary_position: Joi.string().required(),
    secondary_position: Joi.string().required(),
    skills: Joi.array().min(1),
});

