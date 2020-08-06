const passport = require("passport");

module.exports = (req, res, next) =>
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (err) return res.status(401).send("Unauthorized!");
    req.logIn(user, (err3) => {
      if (err3) return next(err3);
    });

    return next();
  })(req, res, next);
// Return middleware
