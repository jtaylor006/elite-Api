const storiesServices = require("../services/storiesServices");

exports.getStories = (req, res, next) => {
  try {
    return storiesServices.getStories(res);
  } catch (err) {
    return next(err);
  }
};

exports.createStory = (req, res, next) => {
  try {
    const storyInfo = req.body;
    return storiesServices.createStory(res, storyInfo);
  } catch (err) {
    return next(err);
  }
};

exports.editStory = (req, res, next) => {
  try {
    const { storyId } = req.params;
    const updatedStory = req.body;
    return storiesServices.editStory(res, storyId, updatedStory);
  } catch (err) {
    return next(err);
  }
};

exports.deleteStory = (req, res, next) => {
  try {
    const { storyId } = req.params;
    return storiesServices.deleteStory(res, storyId);
  } catch (err) {
    return next(err);
  }
};
