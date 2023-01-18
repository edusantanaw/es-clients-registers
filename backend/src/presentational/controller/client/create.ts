import { client } from "../../../domain/entities/client";
import { IValidator } from "../../../protocols/helper/validator";
import { createClientUsecase } from "../../../protocols/usecases/createClient";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class CreateClientController {
  constructor(
    private readonly emailValidator: IValidator,
    private readonly cpfValidator: IValidator,
    private readonly clientUsecase: createClientUsecase
  ) {}
  async handle(data: client) {
    try {
      const { address, cpf, email, name, phone } = data;
      if (!name) return badRequest(new InvalidParamError("nome"));
      
      if (!this.emailValidator.isValid(email))
        return badRequest(new InvalidParamError("email"));

      if (!phone) return badRequest(new InvalidParamError("telefone"));

      if (!this.cpfValidator.isValid(cpf))
        return badRequest(new InvalidParamError("cpf"));

      if (!address) return badRequest(new InvalidParamError("endereço"));

      const client = await this.clientUsecase.create(data);
      return success(client);
    } catch (error) {
      return server(error);
    }
  }
}
