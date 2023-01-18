import { deleteClientUsecase } from "../../../protocols/usecases/deleteClient";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import { badRequest, server, success } from "../../../utils/helpers/httpResponse";

export class DeleteClientController {
    constructor(private readonly deleteClientUsecase: deleteClientUsecase) {}
    async handle({ id }: { id: string }) {
      try {
        if (!id) return badRequest(new InvalidParamError("id"));
        await this.deleteClientUsecase.delete(id);
        return success(true);
      } catch (error) {
        return server(error);
      }
    }
  }