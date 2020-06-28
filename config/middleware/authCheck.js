const passport = require("passport");

// const User = require("../../models/User/User");

// additionalPermissions is second layer of authCheck where we can add more requirements on top of the general role-based auth
module.exports = (oneOfPermissions, additionalPermissions) =>
  // Return middleware
  (req, res, next) =>
    passport.authenticate("jwt", { session: false }, (err, user) => {
      if (err) return res.status(401).send("Unauthorized!");

      const {id} = user;

      return User.findById(id, (err2, user2) => {
        if (err2 || !user2) return res.status(401).send("User not found!");

        // eslint-disable-next-line
        req.logIn(user2, (err3) => {
          if (err3) return next(err3);
        });

        let hasPermission = false;

        if (
          !oneOfPermissions ||
          (!oneOfPermissions && !additionalPermissions)
        ) {
          hasPermission = true;
        } else {
          // LOOK THROUGH GENERAL ROLES AND MAKE SURE USER'S PERMISSIONS ARRAY HAS AT LEAST 1 REQUIRED ROLE
          // eslint-disable-next-line
          if (oneOfPermissions && user2.permissions) {
            // eslint-disable-next-line
            for (let i = 0; i < user2.permissions.length; i += 1) {
              if (oneOfPermissions.includes(user2.permissions[i])) {
                hasPermission = true;
                break;
              }
            }
          }

          // ADD OPTIONAL ADDITIONAL REQUIREMENTS
          // FOR FUTURE UPDATE, CAN BE SOMETHING LIKE "PERMISSION_UPDATE"
          // if (additionalPermissions && user2.permissions) {
          //   for (let i = 0; i < user2.permissions.length; i += 1) {
          //     if (!additionalPermissions.includes(user2.permissions[i])) {
          //       hasPermission = false;
          //       break;
          //     }
          //   }
          // }
        }

        if (hasPermission) {
          return next();
        }

        return res
          .status(401)
          .send(
            `Sorry unfortunately you do not have the correct privileges to perform this action 🙁 Please refer to your administrator.`
          );
      });
    })(req, res, next);
