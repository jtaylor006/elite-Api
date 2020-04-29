const userQueries = require('../constants/userQueries')
const pool = require('./index.js');
const getFormattedDate = require ('../helpers/getFormattedDate')
const formattedDate = getFormattedDate(new Date())

const seedUserTable = () => {
    const userValues = ['jarredtaylor0@gmail.com', 'JT', 'Taylor', 'Getlikeme1', formattedDate]
    pool.query(userQueries.createUserQuery, userValues, (error, response) => {
        if (error) {
            throw new Error(error)
        }
        return console.log(response)
    })
}
const seedTables = () => {
    seedUserTable()
}
seedTables()