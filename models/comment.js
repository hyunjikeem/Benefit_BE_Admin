'use strict';
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {
        static associate(models) {

            Comment.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE' });
            Comment.belongsTo(models.Policy, { foreignKey: 'postId', sourceKey: 'postId', onDelete: 'CASCADE' });
        
        }
    }
    Comment.init(
        {
            CommentId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            
            content: {
                allowNull: false,
                type: Sequelize.STRING(255),
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Comment',
        },
    );
    return Comment;
};