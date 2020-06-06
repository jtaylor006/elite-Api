const userServices = require('../services/usersServices.js')

exports.deleteUser = (req, res, next) => {
    try {
        console.log(req.params.id)
        const { id } = req.params
        return userServices.deleteUser(res, id)
    } catch (error) {
            return next(error)
    }
}

exports.editUser = (req, res, next) => {
    try {
        console.log(req.params.userId)
        const id = req.params.userId
        const info = req.body
        return userServices.editUser(res, id, info)
    } catch (error) {
        return next(error)
    }
}



exports.getUsers = (req, res, next) => {
    try {
        return userServices.getUsers(res)
    } catch (error) {
        return next(error)
    }
}

exports.createUsers = (req, res, next) => {
    try {
        const userInfo = req.body
        return userServices.createUsers(res, userInfo)
    } catch (error) {
        return next(error)
    }
}