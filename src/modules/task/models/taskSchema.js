const fileSchema = require('../../../common/validationsModel/file-schema')
const Joi = require('joi')

module.exports = Joi.object({
    title: Joi.string().required(),
    duration: Joi.string().required(),
    description: Joi.string().required(),
    position: Joi.string().required(),
    image: fileSchema.max(1),
});


