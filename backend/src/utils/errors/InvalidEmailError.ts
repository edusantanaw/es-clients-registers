export class InvalidParamError extends Error {
  constructor(param: string) {
    super(`O ${param} é invalido!`);
    this.name = "InvalidParamError";
  }
}
