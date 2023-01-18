import { LoadAllClient } from "../../../src/presentational/controller/client/loadAll";
import { noFound, success } from "../../../src/utils/helpers/httpResponse";
import { validClient } from "../../../src/utils/helpers/validUser";
import { LoadClientUsecaseSpy } from "../../mocks/loadClientUsecase";

function makeSut() {
  const loadClientUsecase = new LoadClientUsecaseSpy();
  const loadAllClient = new LoadAllClient(loadClientUsecase);
  return { loadAllClient, loadClientUsecase };
}

describe("Load all", () => {
  test("Should return  status 204 if clients not found", async () => {
    const { loadAllClient } = makeSut();
    const response = await loadAllClient.handle();
    expect(response).toEqual(noFound("Clients"));
  });
  test("Should return status 200 and all clients", async () => {
    const { loadAllClient, loadClientUsecase } = makeSut();
    loadClientUsecase.clients = [validClient];
    const response = await loadAllClient.handle();
    expect(response).toEqual(success([validClient]));
  });
});
