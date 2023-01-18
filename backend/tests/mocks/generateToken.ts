import { generateToken } from "../../src/protocols/helper/generateToken";

export class GenerateTokenSpy implements generateToken {
  token = "token";
  async generate(username: string) {
    return this.token;
  }
}
