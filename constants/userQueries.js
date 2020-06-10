const createUserQuery = `INSERT INTO users (email, first_name, last_name, password, date_created) VALUES ($1, $2, $3, $4, $5)`;
const updateQuery = `UPDATE users SET`;
const createStoryQuery = `INSERT INTO stories (title, subtitle, image, body, category, created_by, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7)`;

module.exports = { createStoryQuery, createUserQuery, updateQuery };


