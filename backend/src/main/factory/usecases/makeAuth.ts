import { AuthUsecase } from "../../../domain/usecases/auth/auth";import { UserRepository } from "../../../infra/repositories/user";
import { Encypter } from "../../../utils/helpers/encyper";
import { GenerateToken } from "../../../utils/helpers/generateToken";

export function makeAuthUsecase() {
  const userRepository = new UserRepository();
  const generateToken = new GenerateToken();
  const encryper = new Encypter();
  return new AuthUsecase(generateToken, userRepository, encryper);
}
