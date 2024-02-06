const globalFilter = { updatedAt: false, createdAt: false }
const commonFilter = { ...globalFilter, password: false, role: false, isLoggedIn: false, _id: false }
const chefFilter = {
    ...globalFilter
}
const playerFilter = { ...commonFilter }





module.exports = {
    globalFilter,
    chefFilter,
    playerFilter
}