import { AuthController } from "../../../presentational/controller/auth/auth";
import { EmailValidator } from "../../../utils/helpers/emailValidator";
import { makeAuthUsecase } from "../usecases/makeAuth";

export function makeAuthController() {
  const authUsecase = makeAuthUsecase();
  const emailValidator = new EmailValidator();
  const authController = new AuthController(authUsecase, emailValidator);
  return authController;
}
