const db = require("../db");
const getFormattedDate = require("../helpers/getFormattedDate");
const formatUpdateQuery = require("../helpers/formatUpdateQuery");
const queries = require("../constants/storyQueries");
const formattedDate = getFormattedDate(new Date());

const getStories = (res) => {
  return db.query(queries.getAllStories, [], (err, results) => {
    if (err) {
      throw new Error(err);
    }
    return res.status(200).send({ stories: results.rows });
  });
};

const createStory = (res, storyInfo) => {
  const { title, subtitle, image, body, category, created_by } = storyInfo;
  return db.query(
    queries.createStoryQuery,
    [title, subtitle, image, body, category, created_by, formattedDate],
    (err, results) => {
      if (err) {
        throw new Error(err);
      }
      return res
        .status(200)
        .send({ message: `Successfully created ${title}!` });
    }
  );
};

const editStory = async (res, id, info) => {
  const values = Object.values(info);
  const updateQuery = await formatUpdateQuery(
    info,
    queries.updateStoryQuery,
    id
  );
  return db.query(updateQuery, values, (error, results) => {
    if (error) {
      throw new Error(error);
    }
    return res.status(200).send({ message: "Success!" });
  });
};

const deleteStory = async (res, id) => {
  const deleteQuery = (queries.deleteStoryQuery += ` id=($${id})`);
  return db.query(deleteQuery, [id], (error, results) => {
    if (error) {
      throw new Error(error);
    }
    return res
      .status(200)
      .send({ message: "Successfully deleted the story! " });
  });
};

module.exports = { createStory, editStory, deleteStory, getStories };
