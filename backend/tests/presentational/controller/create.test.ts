import { client } from "../../../src/domain/entities/client";
import { CreateClientController } from "../../../src/presentational/controller/client/create";
import { InvalidParamError } from "../../../src/utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { validClient } from "../../../src/utils/helpers/validUser";
import { CpfValidatorSpy } from "../../mocks/cpfValidator";
import { CreateClientUsecaseSpy } from "../../mocks/createClient";
import { EmailValidatorSpy } from "../../mocks/emailValidator";

function makeSut() {
  const emailValidator = new EmailValidatorSpy();
  const createClientUsecase = new CreateClientUsecaseSpy();
  const cpfValidator = new CpfValidatorSpy();
  const createClientController = new CreateClientController(
    emailValidator,
    cpfValidator,
    createClientUsecase
  );
  return {
    createClientController,
    cpfValidator,
    emailValidator,
    createClientUsecase,
  };
}

describe("Create client", () => {
  test("Should return status 400 if name is not provided", async () => {
    const { createClientController } = makeSut();
    const response = await createClientController.handle({} as client);
    expect(response).toEqual(badRequest(new InvalidParamError("nome")));
  });
  test("Should return status 400 if email is not provided", async () => {
    const { createClientController, emailValidator } = makeSut();
    emailValidator.valid = false;
    const response = await createClientController.handle({
      name: "any_name",
      email: "",
      cpf: "",
      address: {},
    } as client);
    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });
  test("Should return status 400 if phone is not provided", async () => {
    const { createClientController } = makeSut();
    const response = await createClientController.handle({
      name: "any_name",
      email: "any_email@email.com",
      address: {},
    } as client);
    expect(response).toEqual(badRequest(new InvalidParamError("telefone")));
  });
  test("Should return status 400 if cpf is not provided", async () => {
    const { createClientController, cpfValidator } = makeSut();
    cpfValidator.valid = false;
    const response = await createClientController.handle({
      name: "any_name",
      email: "any_email@email.com",
      cpf: "",
      phone: 1234,
      address: {} as any,
    });
    expect(response).toEqual(badRequest(new InvalidParamError("cpf")));
  });
  test("Should return status 400 if address is not provided", async () => {
    const { createClientController } = makeSut();
    const response = await createClientController.handle({
      name: "any_name",
      email: "any_email@email.com",
      phone: 1234,
      cpf: "123.123.123.10",
      address: null as unknown,
    } as client);
    expect(response).toEqual(badRequest(new InvalidParamError("endereço")));
  });
  test("Should throw if email is already being used", async () => {
    const { createClientController, emailValidator, createClientUsecase } =
      makeSut();
    createClientUsecase.emailAlreadyUsed = true;
    emailValidator.valid = true;
    const response = await createClientController.handle(validClient);
    expect(response).toEqual(server("Email já esta sendo usado!"));
  });
  test("Should return an user if user is create", async () => {
    const { createClientController, emailValidator } = makeSut();
    emailValidator.valid = true;
    const response = await createClientController.handle(validClient);
    expect(response).toEqual(success(validClient));
  });
});
