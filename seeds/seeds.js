
const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedNewStory = require('./newStory');
const seedContinueStory = require('./continueStory');
const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedNewStory();

  await seedContinueStory();


  process.exit(0);
};

seedAll();