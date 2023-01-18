import { loadClientUsecase } from "../../../protocols/usecases/loadClient";
import { noFound, server, success } from "../../../utils/helpers/httpResponse";

export class LoadAllClient {
  constructor(private readonly loadClientUsecas: loadClientUsecase) {}
  async handle() {
    try {
      const clients = await this.loadClientUsecas.loadAll();
      if (!clients) return noFound("Clients");
      return success(clients);
    } catch (error) {
      return server(error);
    }
  }
}
