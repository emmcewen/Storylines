
const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "",
    "postContent": "",
    "userId": 1``
  },
  {
    "postTitle": "",
    "postContent": "This is the greenest field",
    "userId": 2
  },
  {
    "postTitle": "",
    "postContent": "",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;