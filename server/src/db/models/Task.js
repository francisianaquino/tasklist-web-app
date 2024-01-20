import Sequelize from "sequelize";

import { databaseConnection } from "../index.js";

export const TaskModel = databaseConnection.define("Task", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  todo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
});