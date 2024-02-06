const fileSchema = require('../../../common/validationsModel/file-schema')
const Joi = require('joi')

module.exports = Joi.object({
    image: fileSchema.max(1),
    name: Joi.string().required(),
    answers: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            rate: Joi.number().default(0),
        })
    ),
});

