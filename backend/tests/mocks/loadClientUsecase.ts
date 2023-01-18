import { client } from "../../src/domain/entities/client";

export class LoadClientUsecaseSpy {
  clients: client[] | null = null;
  client: client | null = null;
  async loadAll() {
    return this.clients;
  }
  async loadById(id: string) {
    return this.client;
  }
}
