const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
    info: {
        title: 'Elite API swagger API registration',
        version: '1.0.0',
        description: 'Endpoints to test the api routes'
    },
    host: 'localhost:3000',
    basePath: '/',
    securityDefitions: {

    }
}

const options = {
    swaggerDefinition,
    apis: ['../routes/*.js']
}

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
