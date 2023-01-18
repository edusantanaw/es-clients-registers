import { Router } from "express";
import adapt from "../adapter/express-adapter";
import { makeCreateCLientController } from "../factory/controller/createClient";
import { makeDeleteClient } from "../factory/controller/deleteClient";
import { makeLoadAllClient } from "../factory/controller/loadAllClient";
import { makeLoadClientById } from "../factory/controller/loadClientById";
import { makeUpdateCLientController } from "../factory/controller/updateClientController";

import verifyTokenMiddleware from "../middlewares/verifyToken";

export default (router: Router) => {
  router.post(
    "/client",
    verifyTokenMiddleware,
    adapt(makeCreateCLientController())
  );
  router.put(
    "/client/:id",
    verifyTokenMiddleware,
    adapt(makeUpdateCLientController())
  );
  router.get("/clients", verifyTokenMiddleware, adapt(makeLoadAllClient()));
  router.get("/client/:id", verifyTokenMiddleware, adapt(makeLoadClientById()));
  router.delete("/client/:id", verifyTokenMiddleware, adapt(makeDeleteClient()));
};
