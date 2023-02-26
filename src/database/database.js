import Sequelize from 'sequelize';

export const sequelize = new Sequelize('tcit', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres'
});