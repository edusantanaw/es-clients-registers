import { generateToken } from "../../../protocols/helper/generateToken";

interface IUserRepository {

}

export class AuthUsecase {
  constructor(
    private readonly generateToken: generateToken,
    private readonly userRepository: IUserRepository
  ) {}
  async auth(email: string, password: string) {

    // const token = await this.generateToken.generate(username);
    // return token;
  }
}
