import { client } from "../../../src/domain/entities/client";
import { clientRepository } from "../../../src/protocols/repository/client";
import { validClient } from "../../../src/utils/helpers/validUser";

export class ClientRepositorySpy implements clientRepository {
  client: client = validClient;
  clients: client[] = [validClient];
  clientByEmail: client | null = null;
  clientById: client | null = null;
  async loadByEmail(email: string) {
    return this.clientByEmail;
  }

  async create(data: client) {
    return this.client;
  }
  async loadAll() {
    return this.clients;
  }
  async loadById(id: string) {
    return this.clientById;
  }
  async update(data: { data: client; id: string }) {
    return this.client;
  }
  async delete(id: string) {
    return 
  }
}
