import validate from "validator";
import { validator } from "../../protocols/helper/validator";

export class EmailValidator implements validator {
  isValid(email: string) {
    const valid = validate.isEmail(email);
    return valid;
  }
}
