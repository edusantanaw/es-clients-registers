import express from "express";
import routes from "./config/routes";
import cors from "cors";
import database from "../infra/db/connect";

class App {
  app = express();
  port = process.env.PORT || 5000;

  middlewares() {
    this.app.use(cors({ credentials: true, origin: "http://127.0.0.1:5173" }));
    this.app.use(express.json());
  }

  async routes() {
    await routes(this.app);
  }

  async init() {
    this.middlewares();
    await this.routes();
    await database();
    this.app.listen(this.port, () =>
      console.log(`App running at port ${this.port}`)
    );
  }
}

const app = new App();
app.init();
