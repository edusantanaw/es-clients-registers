import { IValidator } from "../../../protocols/helper/validator";
import { ISignupUsecase } from "../../../protocols/usecases/signup";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class SignupController {
  constructor(
    private readonly emailValidator: IValidator,
    private readonly signupUsecase: ISignupUsecase
  ) {}

  async handle(data: {
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    const { confirmPassword, email, password } = data;

    try {
      if (!email) return badRequest(new InvalidParamError("email"));
      if (!password) return badRequest(new InvalidParamError("senha"));
      if (!confirmPassword)
        return badRequest(new InvalidParamError("cofirmação de senha"));
      if (password !== confirmPassword)
        return badRequest({ message: "As senhas não coecidem!" });
      const isValid = this.emailValidator.isValid(email);
      if (!isValid) return badRequest(new InvalidParamError("email"));
      const token = await this.signupUsecase.execute(email, password);
      return success(token);
    } catch (error) {
      return server(error);
    }
  }
}
