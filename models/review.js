'use strict';
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Review extends Model {
        static associate(models) {

            Review.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE' });
            Review.belongsTo(models.Policy, { foreignKey: 'postId', sourceKey: 'postId', onDelete: 'CASCADE' });
        
        }
    }
    Review.init(
        {
            reviewId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            review_link: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            
            review_status: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            }

        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Review',
        },
    );
    return Review;
};