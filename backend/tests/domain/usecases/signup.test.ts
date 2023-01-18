import { GenerateTokenSpy } from "../../mocks/generateToken";
import { EncrpterSpy } from "../../mocks/helpers/encrypter";
import { UserRepositorySpy } from "../../mocks/repo/user";
import { SignupUsecase } from "../../../src/domain/usecases/auth/signup";

function makeSut() {
  const userRepository = new UserRepositorySpy();
  const generateToken = new GenerateTokenSpy();
  const encrypter = new EncrpterSpy();
  const signupUsecase = new SignupUsecase(
    userRepository,
    encrypter,
    generateToken
  );
  return { signupUsecase, userRepository };
}

describe("Signup use case", () => {
  test("Should throw an error if email already being used!", async () => {
    const { signupUsecase, userRepository } = makeSut();
    userRepository.userByEmail = null;
    const response = signupUsecase.execute("any_email", "password");
    expect(response).rejects.toBe("O email já está sendo usado!");
  });
  test("Should return an new token if user is create!", async () => {
    const { signupUsecase } = makeSut();
    const response = await signupUsecase.execute("any_email", "valid_password");
    expect(response).toBe("token");
  });
});
