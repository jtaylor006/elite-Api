const express = require ('express');
require("dotenv").config();
const app = express ();
const PORT = process.env.PORT;

const logger = require ('morgan');
app.use(logger('dev'))
app.get('/', (req, res)=> res.send('Welcome Elite'));

require ('./routes.js')(app)

app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
});

