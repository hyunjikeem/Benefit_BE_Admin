'use strict';
const Sequelize = require('sequelize');
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Zzim_folder extends Model {
        static associate(models) {

            Zzim_folder.hasMany(models.Zzim, { foreignKey: 'folderId', sourceKey: 'folderId', onDelete: 'CASCADE' });
            Zzim_folder.belongsTo(models.User, { foreignKey: 'userId', sourceKey: 'userId', onDelete: 'CASCADE' });
            Zzim_folder.belongsTo(models.User, { foreignKey: 'nickname', sourceKey: 'nickname' });
        
        }
    }
    Zzim_folder.init(
        {
            folderId: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },

            folder_name: {
                allowNull: false,
                type: Sequelize.STRING,
            },

            folder_status: {
                allowNull: false,
                type:Sequelize.BOOLEAN,
            }
        },
        {
            sequelize,
            timestamps: true,
            modelName: 'Zzim_folder',
        },
    );
    return Zzim_folder;
};