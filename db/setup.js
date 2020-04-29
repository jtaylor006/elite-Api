const pool = require('./index.js');
const createUserTable = () => {
    const userTableQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(255),
    date_created TIMESTAMP)`;

    pool.query(userTableQuery, [], (error, response) => {
        if (error) {
            throw new Error(error)
        }
        return console.log(response)
    })
}
const playerTables = () => {
    const playerTableQuery = `CREATE TABLE IF NOT EXISTS players
        (id SERIAL PRIMARY KEY,
        email VARCHAR(50),
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        password VARCHAR(50),
        date_created TIMESTAMP)`;

    pool.query(playerTableQuery, [], (error, response) => {
        if (error) {
            throw new Error(error)
        }
        return console.log(response)
    })
}


const createAllTables = () => {
    createUserTable()
    playerTables()
}
createAllTables();

