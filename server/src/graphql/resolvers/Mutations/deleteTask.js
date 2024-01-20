import { TaskModel } from "../../../db/models/index.js";

export const deleteTask = async (parent, args, context) => {
  const result = await TaskModel.findByPk(args.id);
  await TaskModel.destroy({ where: { id: args.id } });
  return result;
};