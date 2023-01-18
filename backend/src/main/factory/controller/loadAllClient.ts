import { LoadAllClient } from "../../../presentational/controller/client/loadAll";
import { makeLoadClientUsecase } from "../usecases/loadClient";

export function makeLoadAllClient() {
  const loadClientUsecase = makeLoadClientUsecase();
  return new LoadAllClient(loadClientUsecase);
}
