import { ClientRepositorySpy } from "../../mocks/repo/client";
import { validClient } from "../../../src/utils/helpers/validUser";
import { UpdateClientUsecase } from "../../../src/domain/usecases/client/update";

function makeSut() {
  const clientRepository = new ClientRepositorySpy();
  const updateClientUsecase = new UpdateClientUsecase(clientRepository);
  return { clientRepository, updateClientUsecase };
}

describe("Client update use case", () => {
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase } = makeSut();
    const response = updateClientUsecase.update({
      data: validClient,
      id: "any_id",
    });
    expect(response).rejects.toBe("Cliente não encontrado!");
  });
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase, clientRepository } = makeSut();
    const { email, ...restClient } = validClient;
    clientRepository.clientById = validClient;
    clientRepository.clientByEmail = {
      ...validClient,
      email: "used_email.com",
    };
    const response = updateClientUsecase.update({
      data: { ...restClient, email: "used_email.com" },
      id: "any_id",
    });
    expect(response).rejects.toBe("O email já esta sendo usado!");
  });
  test("Should throw an error if client not exists", async () => {
    const { updateClientUsecase, clientRepository } = makeSut();
    clientRepository.clientById = validClient;
    const response = await updateClientUsecase.update({
      data: validClient,
      id: "any_id",
    });
    expect(response).toEqual(validClient);
  });
});
