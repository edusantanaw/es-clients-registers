import { GenerateTokenSpy } from "../../mocks/generateToken";
import { AuthUsecase } from "../../../src/domain/usecases/auth/auth";

function makeSut() {
  const creadentials = { username: "user", password: "pass" };
  const generateToken = new GenerateTokenSpy();
  const authUsecase = new AuthUsecase(creadentials, generateToken);
  return { authUsecase, creadentials };
}

describe("Auth use case", () => {
  test("Should throw if user not found", () => {
    const { authUsecase } = makeSut();
    const response = authUsecase.auth("invalid_user", "any_password");
    expect(response).rejects.toBe("Usuario não encontrado!");
  });
  test("Should throw if password is invalid", () => {
    const { authUsecase, creadentials } = makeSut();
    const response = authUsecase.auth(creadentials.username, "any_password");
    expect(response).rejects.toBe("A senha é invalida!");
  });
  test("Should return an token if credentials is valid", async () => {
    const { authUsecase, creadentials } = makeSut();
    const { password, username } = creadentials;
    const response = await authUsecase.auth(username, password);
    expect(response).toBe("token");
  });
});
