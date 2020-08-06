const users = require("./routes/users");
const images = require("./routes/images");
const stories = require("./routes/stories");

require("./config/middleware/passport-local-strategy");

module.exports = (app) => {
  app.use("/api/users", users);
  app.use("/api/images", images);
  app.use("/api/stories", stories);

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    if (err.message === "Failed to serialize user into session") {
      return res.status(401).send({ message: "Incorrect Auth" });
    }
    if (!err.statusCode) {
      // eslint-disable-next-line no-param-reassign
      err.statusCode = 500;
    }

    return res.status(err.statusCode).send(err.message);
  });
};
