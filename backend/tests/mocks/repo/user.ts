export class UserRepositorySpy {
    userCreate = { email: "email@email.com", password: "password", id: "id" };
    userByEmail: any = {
      email: "email@email.com",
      password: "password",
      id: "id",
    };
    async create(email: string, password: string) {
      return this.userCreate;
    }
    async loadByEmail(email: string) {
      return this.userByEmail;
    }
  }