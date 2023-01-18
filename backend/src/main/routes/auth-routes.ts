import { Router } from "express";
import adapt from "../adapter/express-adapter";
import { makeAuthController } from "../factory/controller/makeAuthControler";

export default (router: Router) => {
  router.post("/auth", adapt(makeAuthController()));
};
