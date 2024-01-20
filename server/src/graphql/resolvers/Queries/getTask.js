import { TaskModel } from "../../../db/models/index.js";

export const getTask = async (parent, args, context) => {
  const result = await TaskModel.findByPk(args.id);
  return result;
};