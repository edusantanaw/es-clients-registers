import { InvalidParamError } from "../../../src/utils/errors/InvalidEmailError";
import {
  badRequest,
  noFound,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { LoadClientUsecaseSpy } from "../../mocks/loadClientUsecase";
import { validClient } from "../../../src/utils/helpers/validUser";
import { LoadClientByIdController } from "../../../src/presentational/controller/client/loadById";

function makeSut() {
  const loadClientUsecase = new LoadClientUsecaseSpy();
  const loadClientByIdController = new LoadClientByIdController(
    loadClientUsecase
  );
  return { loadClientByIdController, loadClientUsecase };
}

describe("Load client by id", () => {
  test("Should return status 400 if is not provided", async () => {
    const { loadClientByIdController } = makeSut();
    const response = await loadClientByIdController.handle({ id: "" });
    expect(response).toEqual(badRequest(new InvalidParamError("id")));
  });
  test("Should return status 204 if client are not found", async () => {
    const { loadClientByIdController } = makeSut();
    const response = await loadClientByIdController.handle({ id: "any_id" });
    expect(response).toEqual(noFound("Client"));
  });
  test("Should return status 200 and an client", async () => {
    const { loadClientByIdController, loadClientUsecase } = makeSut();
    loadClientUsecase.client = validClient;
    const response = await loadClientByIdController.handle({ id: "any_id" });
    expect(response).toEqual(success(validClient));
  });
});
