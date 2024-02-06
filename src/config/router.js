const express = require('express');
const routerOutlet = express.Router()
const endPoints = require('./../utils/endPoints')
const { multerConfig } = require('./../utils/multer');
const taskRouter = require('../modules/task/task.route');
const playerRouter = require('../modules/player/player.route');


routerOutlet.use(`${endPoints.PLAYER}`, playerRouter)
routerOutlet.use(`${endPoints.TASK}`, taskRouter)

module.exports = routerOutlet