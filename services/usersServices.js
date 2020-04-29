const userQueries = require('../constants/userQueries')
const db = require('../db/index.js')
const getFormattedDate = require ('../helpers/getFormattedDate')
const formattedDate = getFormattedDate(new Date())

const createUsers = (res, userInfo) => {
    const { email, first_name, last_name, password } = userInfo

    return db.query(userQueries.createUserQuery, [email, first_name, last_name, password, formattedDate], (error, results) => {
        if (error) {
            throw new Error(error)
        }
        return res.status(200).send({ message: 'User Created' })
    })
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
