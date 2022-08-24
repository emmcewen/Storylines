
const { ContinueStory } = require('../models');

const continueStoryData =
[
  {
    "content": "Lorem lorem lorem",
    "user_id": 1,
    "newstory_id": 1
  },
  {
    "content": "lorem lorem lorem",
    "user_id": 2,
    "newstory_id": 2
  },
  {
    "content": "lorem lorem lorem",
    "user_id": 3,
    "newstory_id": 3
  }
];

const seedPost = () => ContinueStory.bulkCreate(continueStoryData);

module.exports = seedPost;