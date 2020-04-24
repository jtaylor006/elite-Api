const pool = require('./index.js');
const getFormattedDate = (date) => {
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : "0" + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : "0" + day;
    return month + "/" + day + "/" + year;
};
const formattedDate = getFormattedDate(new Date())

const seedUserTable = () => {
    const seedUserTableQuery = `INSERT INTO users (email, first_name, last_name, password, date_created) VALUES ($1, $2, $3, $4, $5)`
    const userValues = ['jarredtaylor0@gmail.com', 'JT', 'Taylor', 'Getlikeme1', formattedDate]
    pool.query(seedUserTableQuery, userValues, (error, response) => {
        if (error) {
            throw new Error(error)
        }
        return console.log(response)
    })
}
const seedTables = () => {
    seedUserTable()
}
seedTables()