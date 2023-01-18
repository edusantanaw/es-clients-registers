import { IEncrypter } from "../../../protocols/helper/encryper";
import { generateToken } from "../../../protocols/helper/generateToken";
import { IUserRepository } from "../../../protocols/repository/user";

export class SignupUsecase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter,
    private readonly generateToken: generateToken
  ) {}
  async execute(email: string, password: string) {
    const verifyUserEmail = await this.userRepository.loadByEmail(email);
    if (!verifyUserEmail) throw "O email já está sendo usado!";
    const hashedPassword = await this.encrypter.genHash(password);
    const newUser = await this.userRepository.create(email, hashedPassword);
    const token = await this.generateToken.generate(newUser.id);
    return token;
  }
}
