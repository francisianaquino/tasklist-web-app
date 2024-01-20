import { TaskModel } from "../../../db/models/index.js";

export const addTask = async (parent, args, context) => {
  const result = await TaskModel.create({ ...args.input });
  return result;
};