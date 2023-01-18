import { LoadClientByIdController } from "../../../presentational/controller/client/loadById";
import { makeLoadClientUsecase } from "../usecases/loadClient";

export function makeLoadClientById() {
  const loadClientUsecase = makeLoadClientUsecase();
  return new LoadClientByIdController(loadClientUsecase);
}
