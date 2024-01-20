import Sequelize from "sequelize";

export const databaseConnection = new Sequelize('tasklist', 'root', 'root', {
  host: 'localhost',
  port: '3306',
  dialect: 'mysql'
});