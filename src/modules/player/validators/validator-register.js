const Joi = require("joi");
const handleFieldErrors = require('./../../../utils/handleFileErrors');
const { Validation } = require("../../../utils/apiResponse");
const errorValidationMessages = require('./../../../utils/errorValidationMessages')
const fileSchema = require('./../../../common/validationsModel/file-schema')

const validatorRegister = () => {
    return (req, res, next) => {
        const data = { ...req.body, ...req.file }

        const schema = Joi.object({
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

        const { error, value } = schema.validate(data, { abortEarly: false });

        if (error) {
            const errorResponse = handleFieldErrors(error, errorValidationMessages?.[req.ln]);
            return Validation(res, errorResponse)
        }

        next()
    }
};


module.exports = validatorRegister;
