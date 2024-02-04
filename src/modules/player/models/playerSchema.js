const fileSchema = require('../../../common/validationsModel/file-schema')


module.exports = Joi.object({
    logo: fileSchema.max(1),
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    gender: Joi.string(),
    birthDate: Joi.date(),
    skills: Joi.object({
        primary_position: Joi.string(),
        secondary_position: Joi.string(),
        speed: Joi.string(),
        shooting: Joi.string(),
        defense: Joi.string(),
        physical: Joi.string(),
        skill: Joi.string(),
    })
});

