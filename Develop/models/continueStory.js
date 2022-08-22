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