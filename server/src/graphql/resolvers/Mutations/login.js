import { UserModel } from "../../../db/models/index.js";
import { signToken, verifyPassword } from "../../../utils/index.js";

export const login = async (parent, args, context, info) => {
  const { password, email } = args.input;

  const result = await UserModel.findOne({ where: { email } });

  const isValidPassword = await verifyPassword(result.password, password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  return {
    id: result.id,
    email: result.email,
    token: signToken({ userId: result.id }),
  };
};