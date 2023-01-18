export class EncrpterSpy {
    isEqual = false;
    hashedPassword = "hashed";
    async genHash(userId: string) {
      return this.hashedPassword;
    }
    async compare(password: string, hashedPassword: string) {
      return this.isEqual;
    }
  }