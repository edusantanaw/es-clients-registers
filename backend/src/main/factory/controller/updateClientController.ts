import { CpfValidator } from "../../../utils/helpers/cpfValidator";
import { EmailValidator } from "../../../utils/helpers/emailValidator";
import { makeUpdateClientUsecase } from "../usecases/updateClient";
import { UdateClientController } from "../../../presentational/controller/client/update";

export function makeUpdateCLientController() {
  const emailValidator = new EmailValidator();
  const cpfValidator = new CpfValidator();
  const updateClientUsecase = makeUpdateClientUsecase();
  return new UdateClientController(
    emailValidator,
    cpfValidator,
    updateClientUsecase
  );
}
