const userQueries = require("../constants/userQueries");
const pool = require("./index.js");
const getFormattedDate = require("../helpers/getFormattedDate");
const formattedDate = getFormattedDate(new Date());

const seedUserTable = () => {
  const userValues = [
    "jarredtaylor0@gmail.com",
    "JT",
    "Taylor",
    "Getlikeme1",
    formattedDate,
  ];
  pool.query(userQueries.createUserQuery, userValues, (error, response) => {
    if (error) {
      throw new Error(error);
    }
    return console.log(response);
  });
};

const seedStoryTable = () => {
  const storyValues = [
    "There is no winning for lebron James",
    "",
    "",
    `The timeline was an all out war from both sides of the basketball spectrum for five weeks. LeBron James or Michael Jordan. “The King” or “His Airness”. An argument that was tired before and still is, especially after concluding The Last Dance. It’s made #NBATwitter irrational, unrealistic, and borderline frustrated. And I can say that because I’m a victim to it and have no shame in it.
    Some of us grew up in a world where we were told Michael Jordan was the greatest of all time before being able to make a backboard shot. Our parents put us in his shoes and we didn’t know what was on our feet. Dad didn’t have to tell us he was the greatest. Everything around us did it for them.
    The agenda for Michael Jordan wasn’t just pushed because it was well-deserved. We all know the basics. He won six championships, donned the most fashionable shoe ever, and is the most marketable athlete of all time. The game. The look. The allure. I understand.
    `,
    "Sports",
    1,
    formattedDate
  ];
  pool.query(userQueries.createStoryQuery, storyValues, (error, response) => {
    if (error) {
      throw new Error(error);
    }
    return console.log(response);
  });
};
const seedTables = () => {
  seedUserTable();
  seedStoryTable();
};
seedTables();
