import { DeleteClientUsecase } from "../../../domain/usecases/client/delete";
import { ClientRepository } from "../../../infra/repositories/client";


export function makeDeleteClientUsecase(){

    const clientRepository = new ClientRepository()
    return new DeleteClientUsecase(clientRepository)
}