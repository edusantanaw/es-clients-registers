import { IEncrypter } from "../../../protocols/helper/encryper";import { generateToken } from "../../../protocols/helper/generateToken";
import { IUserRepository } from "../../../protocols/repository/user";

export class AuthUsecase {
  constructor(
    private readonly generateToken: generateToken,
    private readonly userRepository: IUserRepository,
    private readonly encrypter: IEncrypter
  ) {}
  async auth(email: string, password: string) {
    const user = await this.userRepository.loadByEmail(email);
    if (!user) throw "Usuario não encontrado!";
    const isPasswordValid = await this.encrypter.compare(
      password,
      user.password
    );
    if (!isPasswordValid) throw "A senha é invalida!";
    const token = await this.generateToken.generate(user.id);
    return token;
  }
}
