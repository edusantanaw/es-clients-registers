import validate from "validator";
import { IValidator } from "../../protocols/helper/validator";

export class EmailValidator implements IValidator {
  isValid(email: string) {
    const valid = validate.isEmail(email);
    return valid;
  }
}
