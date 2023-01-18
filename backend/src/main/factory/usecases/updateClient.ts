import { UpdateClientUsecase } from "../../../domain/usecases/client/update";
import { ClientRepository } from "../../../infra/repositories/client";

export function makeUpdateClientUsecase() {
  const clientRepository = new ClientRepository();
  return new UpdateClientUsecase(clientRepository);
}
