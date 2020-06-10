const Router = require("express-promise-router");
const router = new Router();
const storiesApi = require("../api/stories");

router.get("/", storiesApi.getStories);

router.post("/", storiesApi.createStory);

router.put("/:storyId", storiesApi.editStory);

router.delete("/:storyId", storiesApi.deleteStory);

module.exports = router;
