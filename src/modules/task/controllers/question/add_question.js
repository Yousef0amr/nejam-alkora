const wrap = require("express-async-wrapper")
const { Question } = require('./../../task.model')
const { ApiError, Success } = require('./../../../../utils/apiResponse')
const uploadMedia = require("../../../../utils/uploadMedia")


const addQuestion = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files


        value.task = req.params.id
        value.image = await uploadMedia(files.image[0].path, 'nejamAlkora/questions')

        const question = new Question(
            { ...value }
        )

        await question.save()

        return Success(res, 'OK', { question }, 201)
    }
)


module.exports = addQuestion