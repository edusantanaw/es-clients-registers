import { clientRepository } from "../../../protocols/repository/client";
import { client } from "../../entities/client";

export class UpdateClientUsecase {
  constructor(private clientRepository: clientRepository) {}

  async update({ data, id }: { data: client; id: string }) {
    const verifyClientExists = await this.clientRepository.loadById(id);
    if (!verifyClientExists) throw "Cliente não encontrado!";

    if (data.email !== verifyClientExists.email) {
      const verifyEmailAlreadyBeingUsed =
        await this.clientRepository.loadByEmail(data.email);
      if (verifyEmailAlreadyBeingUsed) throw "O email já esta sendo usado!";
    }

    const newClient = await this.clientRepository.update({ data, id });
    return newClient;
  }
}
