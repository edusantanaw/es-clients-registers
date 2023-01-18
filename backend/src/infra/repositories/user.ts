import User from "../models/user";

const user = User();

export class userRepository {
  async create(email: string, password: string) {
    const newUser = await user.create({ email, password });
    await newUser.save();
    return newUser;
  }

  async loadByEmail(email: string) {
    const userResponse = await user.findOne({ email });
    return userResponse;
  }
}
