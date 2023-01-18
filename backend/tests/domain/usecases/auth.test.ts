import { GenerateTokenSpy } from "../../mocks/generateToken";import { AuthUsecase } from "../../../src/domain/usecases/auth/auth";
import { EncrpterSpy } from "../../mocks/helpers/encrypter";
import { UserRepositorySpy } from "../../mocks/repo/user";

function makeSut() {
  const generateToken = new GenerateTokenSpy();
  const encrypter = new EncrpterSpy();
  const userRepository = new UserRepositorySpy();
  const authUsecase = new AuthUsecase(generateToken, userRepository, encrypter);
  return { authUsecase, encrypter, userRepository };
}

describe("Auth use case", () => {
  test("Should throw if user not found", () => {
    const { authUsecase, userRepository } = makeSut();
    userRepository.userByEmail = null;
    const response = authUsecase.auth("invalid_user", "any_password");
    expect(response).rejects.toBe("Usuario não encontrado!");
  });
  test("Should throw if password is invalid", () => {
    const { authUsecase } = makeSut();
    const response = authUsecase.auth("any_email", "any_password");
    expect(response).rejects.toBe("A senha é invalida!");
  });
  test("Should return an token if credentials is valid", async () => {
    const { authUsecase, encrypter } = makeSut();
    encrypter.isEqual = true;
    const response = await authUsecase.auth("email", "password");
    expect(response).toBe("token");
  });
});
