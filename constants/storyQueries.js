const createStoryQuery = `INSERT INTO stories (title, subtitle, image, body, category, created_by, date_created) VALUES ($1, $2, $3, $4, $5, $6, $7)`;
const getAllStories = `SELECT * FROM stories`;
const updateStoryQuery = `UPDATE stories SET`;
const deleteStoryQuery = `DELETE FROM stories WHERE`;

module.exports = { createStoryQuery, deleteStoryQuery, getAllStories, updateStoryQuery };
