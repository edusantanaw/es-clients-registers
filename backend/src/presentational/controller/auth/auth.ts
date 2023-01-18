import { authUseCase } from "../../../protocols/usecases/authusecase";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class AuthController {
  constructor(private readonly autUseCase: authUseCase) {}
  async handle(data: { username: string; password: string }) {
    try {
      const { username, password } = data;
      if (!username) return badRequest(new InvalidParamError("username"));
      if (!password) return badRequest(new InvalidParamError("senha"));
      const accessToken = await this.autUseCase.auth(username, password);
      return success({ accessToken });
    } catch (error) {
      return server(error);
    }
  }
}
