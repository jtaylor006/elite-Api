const passport = require("passport");

const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const LocalStrategy = require("passport-local");

const User = require("../models/User/User");
const config = require("./extra-config");

// Create local strategy
const localOptions = { usernameField: "email" };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify this email and password, call done with the user
  // if it is the correct email and password
  // otherwise, call done with false

  User.findOne({ email }, (err, user) => {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, { emailFound: false });
    }
    // compare passwords - is `password` equal to user.password?
    return user.comparePassword(password, (error, isMatch) => {
      if (error) {
        return done(error);
      }
      if (!isMatch) {
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
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) =>
  // See if the user ID in the payload exists in our database
  // If it does, call 'done' with that other
  // otherwise, call done without a user object

  User.findById(payload.sub, (err, user) => {
    if (err) {
      return done(err, false);
    }

    if (user) {
      return done(null, user);
    }

    return done(null, false);
  })
);

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
