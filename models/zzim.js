'use strict';
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Zzim extends Model {
        static associate(models) {

            Zzim.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE' });
            Zzim.belongsTo(models.Policy, { foreignKey: 'postId', sourceKey: 'userId', onDelete: 'CASCADE' });
            Zzim.belongsTo(models.Zzim_folder, { foreignKey: 'folderId', sourceKey: 'folderId', onDelete: 'CASCADE' });
        
        }
    }
    Zzim.init(
        {
            ZzimId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            
            zzim_status: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Zzim',
        },
    );
    return Zzim;
};