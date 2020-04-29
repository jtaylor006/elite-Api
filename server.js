const express = require ('express');
require("dotenv").config();
const app = express ();
const PORT = process.env.PORT;

const logger = require ('morgan');

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(logger('dev'))
app.get('/', (req, res)=> res.send('Welcome Elite'));

require ('./routes.js')(app)

app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
});

