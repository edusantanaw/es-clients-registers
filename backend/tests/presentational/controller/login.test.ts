import {
  badRequest,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { AuthController } from "../../../src/presentational/controller/auth/auth";
import { AuthUseCaseSpy } from "../../mocks/authUsecaseSpy";
import { InvalidParamError } from "../../../src/utils/errors/InvalidEmailError";
import { EmailValidatorSpy } from "../../mocks/emailValidator";

function makeSut() {
  const authUseCase = new AuthUseCaseSpy();
  const emailValidator = new EmailValidatorSpy();
  const authController = new AuthController(authUseCase, emailValidator);
  return { authController, authUseCase, emailValidator };
}

describe("Auth controller", () => {
  test("Should return status 400 if email is not provied", async () => {
    const { authController } = makeSut();

    const response = await authController.handle({
      email: "",
      password: "",
    });

    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });

  test("Should return status 400 if email is not provied", async () => {
    const { authController } = makeSut();

    const response = await authController.handle({
      email: "valid_email",
      password: "",
    });

    expect(response).toEqual(badRequest(new InvalidParamError("senha")));
  });
  test("Should return status 400 if email is invalid", async () => {
    const { authController, emailValidator } = makeSut();
    emailValidator.valid = false;
    const response = await authController.handle({
      email: "invalid_email",
      password: "valid_password",
    });

    expect(response).toEqual(badRequest({ message: "O email é invalido!" }));
  });

  test("Should return status 400 if user not exists", async () => {
    const { authController } = makeSut();

    const response = await authController.handle({
      email: "invalid_email",
      password: "valid_password",
    });

    expect(response).toEqual(server("Usuario não encontrado!"));
  });

  test("Should return status 400 if password is invalid", async () => {
    const { authController, authUseCase } = makeSut();
    authUseCase.userExists = "user";

    const response = await authController.handle({
      email: "valid_email",
      password: "invalid_password",
    });

    expect(response).toEqual(server("A senha é invalida!"));
  });
  test("Should return status 200 and access token if currect creadentials is provided", async () => {
    const { authController, authUseCase } = makeSut();
    authUseCase.isPasswordValid = true;
    authUseCase.userExists = "user";
    authUseCase.password = "valid_password";

    await authController.handle({
      email: "valid_email",
      password: "valid_password",
    });

    expect(authUseCase.password).toBe("valid_password");
  });

  test("Should return status 200 and access token if currect creadentials is provided", async () => {
    const { authController, authUseCase } = makeSut();
    authUseCase.isPasswordValid = true;
    authUseCase.userExists = "user";

    const response = await authController.handle({
      email: "valid_email",
      password: "valid_password",
    });

    expect(response).toEqual(success({ accessToken: "token" }));
  });
});
