const Router = require("express-promise-router");
const router = new Router();
const usersApi = require("../api/users");

router.get("/", usersApi.getUsersByStories);

router.post("/", usersApi.createUsers);

router.put("/:userId", usersApi.editUser);

router.delete("/:id", usersApi.deleteUser);

module.exports = router;
