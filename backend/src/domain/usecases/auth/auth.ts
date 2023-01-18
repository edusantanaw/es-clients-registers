import { generateToken } from "../../../protocols/helper/generateToken";type User = {
  id: string;
  email: string;
  password: string;
};
interface IUserRepository {
  create: (email: string, password: string) => Promise<User>;
  loadByEmail: (email: string) => Promise<User>;
}

interface IEncrypter {
  genHash: (password: string) => Promise<string>;
  compare: (password: string, hashedPassword: string) => Promise<boolean>;
}

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
    if (!isPasswordValid) throw "Senha invalida!";
    const token = await this.generateToken.generate(user.id);
    return token;
  }
}
