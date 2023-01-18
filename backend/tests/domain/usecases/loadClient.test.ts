import { ClientRepositorySpy } from "../../mocks/repo/client";
import { validClient } from "../../../src/utils/helpers/validUser";
import { LoadClientUsecase } from "../../../src/domain/usecases/client/loadClient";

function makeSut() {
  const clientRepository = new ClientRepositorySpy();
  const loadClientUsecase = new LoadClientUsecase(clientRepository);
  return { loadClientUsecase, clientRepository };
}

describe("Load client use case", () => {
  test("Should return null if clients not found", async () => {
    const { clientRepository, loadClientUsecase } = makeSut();
    clientRepository.clients = [];
    const response = await loadClientUsecase.loadAll();
    expect(response).toBe(null);
  });
  test("Should return an array of clients", async () => {
    const { clientRepository, loadClientUsecase } = makeSut();
    clientRepository.clients = [validClient];
    const response = await loadClientUsecase.loadAll();
    expect(response).toEqual([validClient]);
  });
  test("Should return null if client not found", async () => {
    const { loadClientUsecase } = makeSut();
    const response = await loadClientUsecase.loadById("any_id");
    expect(response).toBe(null);
  });
  test("Should return an client if is found", async () => {
    const { loadClientUsecase, clientRepository } = makeSut();
    clientRepository.clientById = validClient;
    const response = await loadClientUsecase.loadById("any_id");
    expect(response).toBe(validClient);
  });
});
