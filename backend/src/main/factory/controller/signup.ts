import { SignupController } from "../../../presentational/controller/auth/signup";
import { EmailValidator } from "../../../utils/helpers/emailValidator";
import { makeSignupUsecase } from "../usecases/signup";

export function makeSignupController() {
  const emailValidator = new EmailValidator();
  const signupUsecase = makeSignupUsecase();
  return new SignupController(emailValidator, signupUsecase);
}
