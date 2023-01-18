export class SignupUsecaseSpy {
    token = "token";
    async execute(email: string, password: string) {
      return this.token;
    }
  }
  