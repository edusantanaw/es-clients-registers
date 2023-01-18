import { CreateClientUsecase } from "../../../domain/usecases/client/create";
import { ClientRepository } from "../../../infra/repositories/client";

export function makeCreateClientUsecase() {
  const clientRepository = new ClientRepository();
  return new CreateClientUsecase(clientRepository);
}
