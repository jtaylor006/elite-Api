const users = require("./routes/users");
const images = require("./routes/images");
const stories = require("./routes/stories");

module.exports = (app) => {
  app.use("/api/users", users);
  app.use("/api/images", images);
  app.use("/api/stories", stories);
};
