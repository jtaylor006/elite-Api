const db = require('../db/index.js')
const createUsers = (res, userInfo) => {


}
const getUsers = (res) => {
    const getUserQuery = 'SELECT * FROM users'
    return db.query(getUserQuery, [], (error, results) => {
        if (error) {
            throw new Error(error)
        }
        return res.status(200).send({ users: results.rows })
    })
}
module.exports = { createUsers, getUsers }
