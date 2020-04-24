const userServices = require ('../services/usersServices.js')
exports.getUsers = (req, res, next) => {
    try {
        console.log(req.body)
        return userServices.getUsers(res)
    } catch (error) {
        return next(error)
    }
}