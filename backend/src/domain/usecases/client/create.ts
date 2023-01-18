import { clientRepository } from "../../../protocols/repository/client";
import { client } from "../../entities/client";

export class CreateClientUsecase {
  constructor(private clientRepository: clientRepository) {}
  async create(data: client) {
    const verifyEmailBeingUsed = await this.clientRepository.loadByEmail(
      data.email
    );
    if (verifyEmailBeingUsed) throw "O email já esta sendo usado!";
    const client = await this.clientRepository.create(data);
    return client;
  }
}
