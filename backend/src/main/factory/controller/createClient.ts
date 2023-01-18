import { CreateClientController } from "../../../presentational/controller/client/create";
import { createClientUsecase } from "../../../protocols/usecases/createClient";
import { CpfValidator } from "../../../utils/helpers/cpfValidator";
import { EmailValidator } from "../../../utils/helpers/emailValidator";
import { makeCreateClientUsecase } from "../usecases/createClient";

export function makeCreateCLientController() {
  const emailValidator = new EmailValidator();
  const cpfValidator = new CpfValidator();
  const createClientUsecase: createClientUsecase = makeCreateClientUsecase();
  return new CreateClientController(
    emailValidator,
    cpfValidator,
    createClientUsecase
  );
}
