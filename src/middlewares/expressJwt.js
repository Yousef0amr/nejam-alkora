const { expressjwt } = require('express-jwt');
const secret = process.env.ACCESS_TOKEN_SECRET
const endpoints = require('./../utils/endPoints')
const Player = require('./../modules/player/player.model')
const Coach = require('./../modules/coach/coach.model')
const checkUser = require('./../common/DB_operation/checkUserDB')
const wrap = require('express-async-wrapper')


const checkUrl = (req, allowedRoutes) => {
    const matches = allowedRoutes.some(route =>
        req.method === route.method &&
        req.originalUrl.includes(route.url)
    );
    return matches;
};

const playerAllowedUrls = [
    { method: 'GET', url: `${endpoints.PLAYER}/current-player` },
    { method: 'PATCH', url: `${endpoints.PLAYER}/current-player` },
    { method: 'DELETE', url: `${endpoints.PLAYER}/current-player` },
    { method: 'POST', url: `${endpoints.PLAYER}/change-password` },
    { method: 'GET', url: `${endpoints.TASK}` },
    { method: 'GET', url: `${endpoints.TASK}/:id` },
    { method: 'GET', url: `${endpoints.TASK}/passed-tasks` },
    { method: 'POST', url: `${endpoints.TASK}/passed-tasks` },
]

const coachAllowedUrls = [
    { method: 'GET', url: `${endpoints.COACH}/current-coach` },
    { method: 'PATCH', url: `${endpoints.COACH}/current-coach` },
    { method: 'DELETE', url: `${endpoints.COACH}/current-coach` },
    { method: 'POST', url: `${endpoints.COACH}/change-coach` },
]

const isRevoked = wrap(async (req, token) => {
    const role = token.payload.role;
    const id = token.payload.id;
    req.userId = id
    let isAllowed = false
    switch (role) {
        case 'player':
            isAllowed = checkUrl(req, playerAllowedUrls);
            if (isAllowed) {
                const player = await checkUser(Player, id)
                if (player) {
                    return false
                }
                return true
            }
            return true
        case 'coach':
            isAllowed = checkUrl(req, coachAllowedUrls);
            if (isAllowed) {
                const coach = await checkUser(Coach, id)
                if (coach) {
                    return false
                }
                return true
            }
            return true
        case 'admin':
            return false;
        default:
            return true;
    }
})

const authRegxOperations = (user) => {
    const allowedUrls = [
        { url: `${user}/login`, method: ["POST", "OPTIONS"] },
        { url: `${user}/register`, method: ["POST", "OPTIONS"] },
        { url: `${user}/check-email`, method: ["POST", "OPTIONS"] },
        { url: `${user}/resend-code`, method: ["POST", "OPTIONS"] },
        { url: `${user}/forget-password`, method: ["POST", "OPTIONS"] },
        { url: `${user}/verify-email`, method: ["POST", "OPTIONS"] },
        { url: `${user}/reset-password`, method: ["POST", "OPTIONS"] },
    ];

    return allowedUrls;
};

const authJwt = wrap(expressjwt({
    secret,
    algorithms: ['HS256'],
    isRevoked: isRevoked
}).unless(
    {
        path: [
            ...authRegxOperations(endpoints.PLAYER),
            ...authRegxOperations(endpoints.COACH),

        ]
    }
))


module.exports = authJwt