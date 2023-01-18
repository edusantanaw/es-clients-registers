import { ClientRepositorySpy } from "../../mocks/repo/client";
import { validClient } from "../../../src/utils/helpers/validUser";
import { CreateClientUsecase } from "../../../src/domain/usecases/client/create";

function makeSut() {
  const clientRepository = new ClientRepositorySpy();
  const createClientUsecase = new CreateClientUsecase(clientRepository);
  return { clientRepository, createClientUsecase };
}

describe("Create client use case", () => {
  test("Should throw if email already being used", () => {
    const { clientRepository, createClientUsecase } = makeSut();
    clientRepository.clientByEmail = validClient;
    const response = createClientUsecase.create(validClient);
    expect(response).rejects.toBe("O email já esta sendo usado!");
  });
  test("Should return an user if user is created", async () => {
    const { createClientUsecase } = makeSut();
    const response = await createClientUsecase.create(validClient);
    expect(response).toBe(validClient);
  });
});
