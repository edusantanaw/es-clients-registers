import { Router } from "express";
import adapt from "../adapter/express-adapter";
import { makeAuthController } from "../factory/controller/makeAuthControler";
import { makeSignupController } from "../factory/controller/signup";

export default (router: Router) => {
  router.post("/auth", adapt(makeAuthController()));
  router.post("/signup", adapt(makeSignupController()));
};
