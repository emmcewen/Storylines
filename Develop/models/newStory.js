const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class NewStory extends Model {}

NewStory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    added_by:{
        type: DataTypes.STRING,
        references:{
          model:'user',
          key:'username'
        }
  
      },
      
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'newstory',
  }
);

module.exports = NewStory;
