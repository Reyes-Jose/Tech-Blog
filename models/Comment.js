const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config')


class Comment extends Model{};


Comment.init(
    {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
        },
        commentText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId:{
            type: DataTypes.INTEGER,
            references:{
                model: 'user',
                key: 'id',
            }
        },
        commentId:{
            type: DataTypes.INTEGER,
            references:{
                model: 'post',
                key: 'id',
            }
        },
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Comment',  
    }
);

module.exports = Comment;