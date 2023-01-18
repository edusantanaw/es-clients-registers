import { ClientRepositorySpy } from "../../mocks/repo/client"
import { validClient } from "../../../src/utils/helpers/validUser"
import { DeleteClientUsecase } from "../../../src/domain/usecases/client/delete"

function makeSut(){
    const clientRepository = new ClientRepositorySpy()
    const deletClientUsecase = new DeleteClientUsecase(clientRepository)
    return {deletClientUsecase, clientRepository}
}

describe('Delete client use case', ()=>{
    test('Should throw if client not exists', ()=> {
        const {deletClientUsecase} = makeSut()
        const response = deletClientUsecase.delete("any_id")
        expect(response).rejects.toBe("Cliente não existe!")
    })
    test('Should return true if client is deleted', async()=> {
        const {clientRepository, deletClientUsecase} = makeSut()
        clientRepository.clientById = validClient
        const response = await deletClientUsecase.delete("any_id")
        expect(response).toBe(true)
    })
})