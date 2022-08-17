const User = require('./User');
const NewStory = require('./NewStory');
const ContinueStory = require('./ContinueStory');

NewStory.hasMany(ContinueStory, {
  foreignKey: 'newstory_id',
});

ContinueStory.belongsTo(NewStory, {
  foreignKey: 'newstory_id',
});

module.exports = { User, NewStory, ContinueStory };