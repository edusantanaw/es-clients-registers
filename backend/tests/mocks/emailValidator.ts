export class EmailValidatorSpy {
  valid = true;
  isValid(email: string) {
    return this.valid;
  }
}
