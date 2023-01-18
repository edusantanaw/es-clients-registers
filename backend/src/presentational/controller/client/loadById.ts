import { loadClientUsecase } from "../../../protocols/usecases/loadClient";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  noFound,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class LoadClientByIdController {
  constructor(private readonly loadClientUsecas: loadClientUsecase) {}
  async handle({ id }: { id: string }) {
    try {
      if (!id) return badRequest(new InvalidParamError("id"));
      const client = await this.loadClientUsecas.loadById(id);
      if (!client) return noFound("Client");
      return success(client);
    } catch (error) {
      return server(error);
    }
  }
}
