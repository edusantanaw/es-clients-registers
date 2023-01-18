import { client } from "../../../domain/entities/client";
import { validator } from "../../../protocols/helper/validator";
import { updateClientUsecase } from "../../../protocols/repository/updateClient";
import { InvalidParamError } from "../../../utils/errors/InvalidEmailError";
import {
  badRequest,
  server,
  success,
} from "../../../utils/helpers/httpResponse";

export class UdateClientController {
  constructor(
    private readonly emailValidator: validator,
    private readonly cpfValidator: validator,
    private readonly updateClientUsecase: updateClientUsecase
  ) {}

  async handle(data: client) {
    try {
      const { address, cpf, email, name, phone, id } = data;
      if (!id) return badRequest(new InvalidParamError("id"));
      if (!name) return badRequest(new InvalidParamError("nome"));

      if (!this.emailValidator.isValid(email))
        return badRequest(new InvalidParamError("email"));

      if (!phone) return badRequest(new InvalidParamError("telefone"));

      if (!this.cpfValidator.isValid(cpf))
        return badRequest(new InvalidParamError("cpf"));
      if (!address) return badRequest(new InvalidParamError("endereço"));
      const updatedClient = await this.updateClientUsecase.update({
        data: data,
        id: id,
      });
      return success(updatedClient);
    } catch (error) {
      return server(error);
    }
  }
}
