import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./Routes";

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.express.use(express.json());
    this.express.use(morgan(process.env.MORGAN_CONFIG));
    this.express.use(cors());
    this.express.use(process.env.PREFIX, routes);
  }

  routes() {
    this.express.use(routes);
  }
}

export default new AppController().express;
