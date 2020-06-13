const express = require("express");
const swaggerUI = require("swagger-ui-express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

const docs = require("./docs");

const app = express();
const PORT = process.env.PORT;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(logger("dev"));
app.use(cors());

app.get("/", (req, res) => res.send("Welcome Elite"));
app.get("/swagger.json", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(docs);
});

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

require("./routes.js")(app);

app.listen(PORT, () => {
  console.log(`listening to PORT ${PORT}`);
});

module.exports = app;
