import { EmailValidatorSpy } from "../mocks/emailValidator";
import { SignupUsecaseSpy } from "../mocks/singupUsecase";
import { InvalidParamError } from "../../src/utils/errors/InvalidEmailError";
import {
  badRequest,
  success,
} from "../../src/utils/helpers/httpResponse";

function makeSut() {
  const emailValidator = new EmailValidatorSpy();
  const signupUsecase = new SignupUsecaseSpy();
  const signupController = new SignupController(emailValidator, signupUsecase);
  return { emailValidator, signupController };
}

describe("Signup controller", () => {
  test("Should return an error if email is not provided!", async () => {
    const { signupController } = makeSut();
    const response = await signupController.handle({
      email: "",
      password: "",
      confirmPassword: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });
  test("Should return an error if password is not provided!", async () => {
    const { signupController } = makeSut();
    const response = await signupController.handle({
      email: "any_email",
      password: "",
      confirmPassword: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("senha")));
  });
  test("Should return an error if confirm password is not provided!", async () => {
    const { signupController } = makeSut();
    const response = await signupController.handle({
      email: "any_email",
      password: "any_senha",
      confirmPassword: "",
    });
    expect(response).toEqual(
      badRequest(new InvalidParamError("cofirmação de senha"))
    );
  });
  test("Should return an error if passwords are not equals!", async () => {
    const { signupController } = makeSut();
    const response = await signupController.handle({
      email: "any_email",
      password: "any_senha",
      confirmPassword: "diffentPassword",
    });
    expect(response).toEqual(
      badRequest({ message: "As senhas não coecidem!" })
    );
  });
  test("Should return an error if email provided is invalid!", async () => {
    const { signupController, emailValidator } = makeSut();
    emailValidator.valid = false;
    const response = await signupController.handle({
      email: "invalid_email",
      password: "any_pass",
      confirmPassword: "any_pass",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });
  test("Should return an token if user is created!", async () => {
    const { signupController } = makeSut();
    const response = await signupController.handle({
      email: "valid_email",
      password: "any_pass",
      confirmPassword: "any_pass",
    });
    expect(response).toEqual(success("token"));
  });
});
