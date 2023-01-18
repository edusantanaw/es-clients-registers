import jwt from "jsonwebtoken";
import { promisify } from "util";

const secret = process.env.TOKEN_SECRET || "secret";
export class GenerateToken {
  async generate(usename: string) {
    const token = await promisify(jwt.sign)(usename, secret);
    return token as string;
  }
}
