const createUserQuery = `INSERT INTO users (email, first_name, last_name, password, date_created) VALUES ($1, $2, $3, $4, $5)`
const editUserQuery = "UPDATE users SET"

module.exports = { createUserQuery, editUserQuery }