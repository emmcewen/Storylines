const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const NewStory = require('./newStory');

class ContinueStory extends Model {}

ContinueStory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content:{
      type: DataTypes.STRING,
    allowNull: false,
  },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },

   
    newstory_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'newstory',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'continuestory',
  }
);

module.exports = ContinueStory;