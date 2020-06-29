const Router = require("express-promise-router");
const passport = require("passport");
const router = new Router();

const authCheck = require("../config/middleware/authCheck");
const usersApi = require("../api/users");
const requireSignIn = passport.authenticate("local", { session: false });

router.get("/", usersApi.getUsersByStories);

router.get("/id/:id", authCheck, usersApi.getUserById);

router.post('/check', authCheck, usersApi.check)

router.post("/", usersApi.createUsers);

router.post("/signin", requireSignIn, usersApi.login);

router.put("/:userId", usersApi.editUser);

router.delete("/:id", usersApi.deleteUser);

module.exports = router;
