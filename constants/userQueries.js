const createUserQuery = `INSERT INTO users (email, first_name, last_name, password, date_created) VALUES ($1, $2, $3, $4, $5)`;
const createStoryQuery = `INSERT INTO stories (title, subtitle, image, body, category, date_created) VALUES ($1, $2, $3, $4, $5, $6)`;

module.exports = { createStoryQuery, createUserQuery };
