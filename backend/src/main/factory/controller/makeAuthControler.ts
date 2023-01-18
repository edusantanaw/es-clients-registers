import { AuthController } from "../../../presentational/controller/auth/auth";
import { makeAuthUsecase } from "../usecases/makeAuth";

export function makeAuthController() {
  const authUsecase = makeAuthUsecase();
  const authController = new AuthController(authUsecase);
  return authController;
}
