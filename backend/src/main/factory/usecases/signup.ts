import { SignupUsecase } from "../../../domain/usecases/auth/signup";
import { UserRepository } from "../../../infra/repositories/user";
import { Encypter } from "../../../utils/helpers/encyper";
import { GenerateToken } from "../../../utils/helpers/generateToken";

export function makeSignupUsecase() {
  const userRepository = new UserRepository();
  const generateToken = new GenerateToken();
  const encryper = new Encypter();
  return new SignupUsecase(userRepository, encryper, generateToken);
}
