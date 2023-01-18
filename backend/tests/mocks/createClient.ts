import { client } from "../../src/domain/entities/client";
import { validClient } from "../../src/utils/helpers/validUser";

export class CreateClientUsecaseSpy {
  client: client = validClient;
  emailAlreadyUsed: boolean = false;
  async create(data: client) {
    this.emailAlreadyUsed;
    if (this.emailAlreadyUsed) throw "Email já esta sendo usado!";
    return this.client;
  }
}
