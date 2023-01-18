import jwt from "jsonwebtoken";
import { promisify } from "util";

const secret = "secret";
export class GenerateToken {
  async generate(userId: string) {
    const token = await promisify(jwt.sign)(userId, secret);
    return token as string;
  }
}
