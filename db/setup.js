const pool = require("./index.js");
const createUserTable = () => {
  const userTableQuery = `CREATE TABLE IF NOT EXISTS users
    (id SERIAL PRIMARY KEY,
    email VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    password VARCHAR(255),
    date_created TIMESTAMP)`;

  pool.query(userTableQuery, [], (error, response) => {
    if (error) {
      throw new Error(error);
    }
    return console.log(response);
  });
};

const createStoryTable = () => {
  const storyTableQuery = `CREATE TABLE IF NOT EXISTS stories
    (id SERIAL PRIMARY KEY,
    title VARCHAR(100),
    subtitle VARCHAR(100),
    image VARCHAR(100),
    body TEXT,
    is_featured BOOLEAN,
    category VARCHAR(30),
    created_by integer REFERENCES users (id),
    date_created TIMESTAMP)`;
  pool.query(storyTableQuery, [], (err, response) => {
      if (err) {
          throw new Error(err);
      }
      return console.log(response)
  })
};

const playerTables = () => {
  const playerTableQuery = `CREATE TABLE IF NOT EXISTS players
        (id SERIAL PRIMARY KEY,
        email VARCHAR(50),
        first_name VARCHAR(50),
        last_name VARCHAR(50),
        password VARCHAR(50),
        date_created TIMESTAMP)`;

  pool.query(playerTableQuery, [], (error, response) => {
    if (error) {
      throw new Error(error);
    }
    return console.log(response);
  });
};

const createAllTables = () => {
  createUserTable();
  playerTables();
  createStoryTable();
};
createAllTables();
