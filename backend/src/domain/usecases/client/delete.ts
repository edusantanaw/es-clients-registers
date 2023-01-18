import { clientRepository } from "../../../protocols/repository/client"


export class DeleteClientUsecase {
    constructor(private readonly clientRepository: clientRepository){}
    async delete(id: string) {
        const verifyClientExists = await this.clientRepository.loadById(id)
        if(!verifyClientExists) throw "Cliente não existe!"
        await this.clientRepository.delete(id)
        return true
    }
}
