import { validator } from "../../protocols/helper/validator";
import { cpf as cpfValidator } from "cpf-cnpj-validator";

export class CpfValidator implements validator {
  isValid(cpf: string) {
    const valid = cpfValidator.isValid(cpf);
    return valid;
  }
}
