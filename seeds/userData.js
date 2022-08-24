
const { User } = require('../models');

const userdata =
[
  {
    "username": "MariahJ",
    "password": "password"
  },
  {
    "username": "ImanP",
    "password": "password"
  },
  {
    "username": "AdrianF",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;