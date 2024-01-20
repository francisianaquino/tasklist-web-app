import { TaskModel } from "../../../db/models/index.js";

export const getTasks = async (parent, args, context) => {
  const result = await TaskModel.findAll();
  return result;
};

export const getTasksByUser = async (parent, { userId }, context) => {
  const result = await TaskModel.findAll({ where: { userId } });
  return result;
};