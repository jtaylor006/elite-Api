const passport = require("passport");

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const bcrypt = require("bcryptjs");

const LocalStrategy = require("passport-local");

const config = require("./extra-config");

const {
  getUserByEmailQuery,
  getUserByIdQuery,
} = require("../../constants/userQueries");
const db = require("../../db");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false

  return db.query(getUserByEmailQuery, [email], (err, results) => {
    if (err) {
      throw new Error(err);
    }
    const user = results.rows[0];
    if (!user) {
      return done(null, { emailFound: false });
    }

    return bcrypt.compare(password, user.password, (error, res) => {
      if (error) {
        done(error);
      }
      if (!res) {
        return done(null, { password: false });
      }
      return done(null, user);
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader("authorization"),
  secretOrKey: config.jwtSecret,
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(
  jwtOptions,
  (payload, done) =>
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that other
    // otherwise, call done without a user object

    db.query(getUserByIdQuery, [payload.sub], (err, results) => {

      if (err) {
        throw new Error(err);
      }
      const user = results.rows[0];
      if (!user) {
        return done(null, false);
      }
      return done(null, user);
    })

);

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
