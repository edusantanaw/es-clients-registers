import { LoadClientUsecase } from "../../../domain/usecases/client/loadClient";
import { ClientRepository } from "../../../infra/repositories/client";

export function makeLoadClientUsecase() {
  const clientRepository = new ClientRepository();
  return new LoadClientUsecase(clientRepository);
}
