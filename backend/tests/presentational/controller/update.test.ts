import { client } from "../../../src/domain/entities/client";
import { InvalidParamError } from "../../../src/utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { EmailValidatorSpy } from "../../mocks/emailValidator";
import { CpfValidatorSpy } from "../../mocks/cpfValidator";
import { validClient } from "../../../src/utils/helpers/validUser";
import { UdateClientController } from "../../../src/presentational/controller/client/update";
import { UpdateClientUsecaseSpy } from "../../mocks/updateClient";

function makeSut() {
  const updateClientUsecase = new UpdateClientUsecaseSpy();
  const emailValidator = new EmailValidatorSpy();
  const cpfValidator = new CpfValidatorSpy();
  const updateClientController = new UdateClientController(
    emailValidator,
    cpfValidator,
    updateClientUsecase
  );
  return {
    updateClientController,
    emailValidator,
    cpfValidator,
    updateClientUsecase,
  };
}

describe("Client update controller", () => {
  test("should return status 400 if id is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {} as client,
      id: "",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("id")));
  });
  test("Should return status 400 if name is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {} as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("nome")));
  });
  test("Should return status 400 if email is not provided", async () => {
    const { updateClientController, emailValidator } = makeSut();
    emailValidator.valid = false;
    const response = await updateClientController.handle({
      id: "any_id",
      data: { name: "any_name" } as client,
    });
    expect(response).toEqual(badRequest(new InvalidParamError("email")));
  });
  test("Should return status 400 if phone is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        address: {},
      } as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("telefone")));
  });
  test("Should return status 400 if cpf is not provided", async () => {
    const { updateClientController, cpfValidator } = makeSut();
    cpfValidator.valid = false;
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        cpf: "",
        phone: 1234,
        address: {} as any,
      },
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("cpf")));
  });
  test("Should return status 400 if address is not provided", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: {
        name: "any_name",
        email: "any_email@email.com",
        phone: 1234,
        cpf: "123.123.123.10",
        address: null as unknown,
      } as client,
      id: "any_id",
    });
    expect(response).toEqual(badRequest(new InvalidParamError("endereço")));
  });

  test("Should throw if user not exists", async () => {
    const { updateClientController } = makeSut();
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(server("Cliente não encontrado!"));
  });
  test("Should throw if email already being used", async () => {
    const { updateClientController, updateClientUsecase } = makeSut();
    updateClientUsecase.client = validClient;
    updateClientUsecase.emailAlreadyUsed = true;
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(server("O email já esta sendo usado!"));
  });
  test("Should throw if email already being used", async () => {
    const { updateClientController, updateClientUsecase } = makeSut();
    updateClientUsecase.client = validClient;
    const response = await updateClientController.handle({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(success(validClient));
  });
});
