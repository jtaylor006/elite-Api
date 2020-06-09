const users = require("./routes/users");
const images = require("./routes/images");

module.exports = (app) => {
  app.use("/api/users", users);
  app.use("/api/images", images);
};
