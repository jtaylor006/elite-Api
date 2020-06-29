const passport = require("passport");

const db = require("../../db");
const { getUserByIdQuery } = require("../../constants/userQueries");

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(
    // if you use Model.id as your idAttribute maybe you'd want
    // done(null, user.id);
    (user, done) => done(null, user.id)
  );

  passport.deserializeUser((id, done) =>
    db.query(getUserByIdQuery, [id], (err, results) => {
      console.log(err)
      const user = results.rows[0];

      return done(err, user);
    })
  );
};
