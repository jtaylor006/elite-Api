const userServices = require ('../services/usersServices.js')
exports.getUsers = (req, res, next) => {
    try {
        console.log(req.body)
        return userServices.getUsers(res)
    } catch (error) {
        return next(error)
    }
}

exports.createUsers = (req, res, next) => {
    try {
        console.log(req)
        return res.status(200).send({message:'received users'})
 //       return userServices.createUsers(res)
    } catch (error) {
        return next(error)
    } 
}