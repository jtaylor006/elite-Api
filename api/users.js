const userServices = require('../services/usersServices.js')

exports.login = (req, res, next) => {

}

exports.logout = (req, res, next) => {
    
}

exports.deleteUser = (req, res, next) => {
    try {
        const { id } = req.params
        return userServices.deleteUser(res, id)
    } catch (error) {
            return next(error)
    }
}

exports.editUser = (req, res, next) => {
    try {
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

exports.getUsersByStories = (req, res, next) => {
    try {
        const ids = req.body
        return userServices.getUsersByStories(res, ids)
    } catch (err) {
        return next(err)
    }
}