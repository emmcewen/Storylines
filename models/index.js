const User = require('./user');
const NewStory = require('./newStory');
const ContinueStory = require('./continueStory');

User.hasMany(NewStory,{
    foreignKey:'user_id'
});
NewStory.belongsTo(User,{
    foreignKey:'user_id'
})

NewStory.hasMany(ContinueStory, {
  foreignKey: 'newstory_id',
});

ContinueStory.belongsTo(NewStory, {
  foreignKey: 'newstory_id',
});

ContinueStory.belongsTo(User,{
    foreignKey: 'user_id'
})
User.hasMany(ContinueStory,{
    foreignKey:'user_id'
});
module.exports = { User, NewStory, ContinueStory };