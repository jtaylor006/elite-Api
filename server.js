const express = require ('express');
const app = express ();
const PORT = 3000;

const logger = require ('morgan');
app.use(logger('dev'))
app.get('/', (req, res)=> res.send('Welcome Elite'));

app.listen(PORT, () => {
    console.log(`listening to PORT ${PORT}`)
});
