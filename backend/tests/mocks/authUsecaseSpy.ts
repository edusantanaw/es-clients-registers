import { authUseCase } from "../../src/protocols/usecases/authusecase";

export class AuthUseCaseSpy implements authUseCase {
  token = "token";
  isPasswordValid = false;
  userExists: string | null = null;
  username: string = ""
  password: string = ""
  async auth(username: string, password: string) {
    this.isPasswordValid;
    this.token;
    this.userExists;
    this.username = username  
    this.password = password
    if (!this.userExists) throw "Usuario não encontrado!";
    if (!this.isPasswordValid) throw "A senha é invalida!";
    return this.token;
  }
}
