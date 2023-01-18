import { clientRepository } from "../../../protocols/repository/client";

export class LoadClientUsecase {
  constructor(private readonly clientRepository: clientRepository) {}

  async loadAll() {
    const clients = await this.clientRepository.loadAll();
    if (clients.length === 0) return null;
    return clients;
  }

  async loadById(id: string) {
    const client = await this.clientRepository.loadById(id);
    return client;
  }
}
