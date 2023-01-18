import { client } from "../../src/domain/entities/client";

export class UpdateClientUsecaseSpy {
  client: client | null = null;
  emailAlreadyUsed = false;
  async update({ data, id }: { data: client; id: string }) {
    if (!this.client) throw "Cliente não encontrado!";
    if (this.emailAlreadyUsed) throw "O email já esta sendo usado!";
    return this.client;
  }
}
