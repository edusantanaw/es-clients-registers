import { creadentials } from "../../../../config/authCredentials";
import { AuthUsecase } from "../../../domain/usecases/auth/auth";
import { GenerateToken } from "../../../utils/helpers/generateToken";

export function makeAuthUsecase() {
  const generateToken = new GenerateToken();
  const authUsecase = new AuthUsecase(creadentials, generateToken);
  return authUsecase;
}
