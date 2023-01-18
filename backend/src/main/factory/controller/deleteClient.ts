import { DeleteClientController } from "../../../presentational/controller/client/delete";
import { makeDeleteClientUsecase } from "../usecases/deleteClient";


export function makeDeleteClient(){
    const deleteClientUsecase = makeDeleteClientUsecase()
    return new DeleteClientController(deleteClientUsecase)
}