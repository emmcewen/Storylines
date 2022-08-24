
const { NewStory } = require('../models');

const newStoryData =
[
  {
    "title": "To be or not to be..",
    "content": "Lorem lorem lorem",
    "user_id": 1
  },
  {
    "title": "Leader of the outlands",
    "content": "lorem lorem lorem",
    "user_id": 2
  },
  {
    "title": "Betrayal on Mars",
    "content": "lorem lorem lorem",
    "user_id": 3
  }
];

const seedPost = () => NewStory.bulkCreate(newStoryData);

module.exports = seedPost;