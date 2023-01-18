import { InvalidParamError } from "../../../src/utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../src/utils/helpers/httpResponse";
import { DeleteClientController } from "../../../src/presentational/controller/client/delete";
import { DeleteClientUsecaseSpy } from "../../mocks/deleteClient";

function makeSut() {
  const deleteClientUsecase = new DeleteClientUsecaseSpy();
  const deleteClientController = new DeleteClientController(
    deleteClientUsecase
  );

  return { deleteClientController, deleteClientUsecase };
}

describe("Delete client constroller", () => {
  test("Should return status 400 if id is not provided", async () => {
    const { deleteClientController } = makeSut();
    const response = await deleteClientController.handle({ id: "" });
    expect(response).toEqual(badRequest(new InvalidParamError("id")));
  });
  test("Should throw if client not exists", async () => {
    const { deleteClientController } = makeSut();
    const response = await deleteClientController.handle({ id: "any_id" });
    expect(response).toEqual(server("Cliente não existe!"));
  });
  test("Should return succes if client id deleted", async () => {
    const { deleteClientController, deleteClientUsecase } = makeSut();
    deleteClientUsecase.clientExists = true;
    const response = await deleteClientController.handle({ id: "any_id" });
    expect(response).toEqual(success(true));
  });
});
