const restPassword = require('../../../../common/Auth_operation/restPassword')
const Player = require('./../../player.model')

module.exports = restPassword(Player)