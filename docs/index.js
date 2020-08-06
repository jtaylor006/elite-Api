const swaggerJSDoc = require("swagger-jsdoc");
const path = require('path')

require("dotenv").config();

// -- setup up swagger-jsdoc --
const swaggerDefinition = {
  info: {
    title: "Elite API",
    version: "1.0.0",
    description: "Elite API",
  },
  host: process.env.DOC_HOST,
  basePath: "/",
};
const options = {
  swaggerDefinition,
  apis: [path.resolve(__dirname, "./", "*.js")],
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
