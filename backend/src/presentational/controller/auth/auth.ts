import { IValidator } from "../../../protocols/helper/validator";
import { authUseCase } from "../../../protocols/usecases/authusecase";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class AuthController {
  constructor(
    private readonly autUseCase: authUseCase,
    private readonly emailValidator: IValidator
  ) {}
  async handle(data: { email: string; password: string }) {
    try {
      const { email, password } = data;
      if (!email) return badRequest(new InvalidParamError("email"));
      if (!password) return badRequest(new InvalidParamError("senha"));
      const isEmailValid = this.emailValidator.isValid(email);
      if (!isEmailValid) return badRequest({ message: "O email é invalido!" });
      const accessToken = await this.autUseCase.auth(email, password);
      return success({ accessToken });
    } catch (error) {
      return server(error);
    }
  }
}
