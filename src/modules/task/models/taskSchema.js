const fileSchema = require('../../../common/validationsModel/file-schema')


module.exports = Joi.object({
    title: Joi.string().required(),
    duration: Joi.number().required(),
    description: Joi.string().required(),
    position: Joi.string().required(),
    image: fileSchema.max(1),
});


