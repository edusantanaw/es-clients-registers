import bcrypt from "bcrypt";

export class Encypter {
  rounds = 10;
  async genHash(password: string) {
    const salt = await bcrypt.genSalt(this.rounds);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  }

  async compare(pass: string, hash: string) {
    const isEqual = await bcrypt.compare(pass, hash);
    return isEqual;
  }
}
