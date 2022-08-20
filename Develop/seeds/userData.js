
const { User } = require('../models');

const userdata =
[
  {
    "username": "",
    "password": "password"
  },
  {
    "username": "",
    "password": "password"
  },
  {
    "username": "",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;