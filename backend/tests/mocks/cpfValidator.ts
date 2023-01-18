export class CpfValidatorSpy {
  valid = true;
  isValid(value: string) {
    return this.valid;
  }
}
