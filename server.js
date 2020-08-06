const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path')

require("dotenv").config();

// const passport = require("./middleware/passport-facebook");
const docs = require('./docs')
const initPassport = require('./config/middleware/initPassport');

const app = express();
const PORT = process.env.PORT;

/** *********************************** */
//* ****// Setup Handlebars Template Engine
/** *********************************** */

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(cors());

initPassport(app)


require("./routes.js")(app);

// app.use(passport.initialize());
// app.use(passport.session());

// -- routes for docs and generated swagger spec --
app.get("/api-docs", (req, res) => {
  res.render("redoc", { docUrl: `${process.env.DOC_URL}/docs/swagger.json` });
});

app.get("/docs/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(docs);
});

// Define request response in root URL (/)
app.get("/", (req, res) => res.send("Welcome Elite"));

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});

module.exports = app;
