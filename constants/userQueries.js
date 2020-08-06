const createUserQuery = `INSERT INTO users (email, first_name, last_name, password, date_created) VALUES ($1, $2, $3, $4, $5)`;
const deleteUserQuery = `DELETE FROM users WHERE id=($1)`
const getUserByIdQuery = `SELECT first_name, last_name, email, id FROM users WHERE id=($1)`;
const getUserByEmailQuery = `SELECT first_name, last_name, email, password, id FROM users WHERE email=($1)`;
const updateQuery = `UPDATE users SET`;

module.exports = { createUserQuery, deleteUserQuery, getUserByIdQuery, getUserByEmailQuery, updateQuery };
