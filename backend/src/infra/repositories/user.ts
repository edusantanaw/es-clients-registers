import { IUserRepository, IUser } from "../../protocols/repository/user";
import User from "../models/User";

const user = User();

export class UserRepository implements IUserRepository {
  async create(email: string, password: string) {
    const newUser = await user.create({ email, password });
    await newUser.save();
    return newUser as IUser;
  }

  async loadByEmail(email: string) {
    const userResponse = await user.findOne({ email: email });
    return userResponse as IUser | null;
  }
}
