import path from "path";
import cors from "cors";
import db from "./models";
import express from "express";
import { Routes } from "@/interfaces/routes.interface";
import { IncomingMessage, Server, ServerResponse } from "http";
import { PORT, NODE_ENV } from "@config";

export default class App {
  readonly app: express.Application;
  readonly env: string;
  readonly port: string | number;
  server: Server<typeof IncomingMessage, typeof ServerResponse>;

  constructor(data: { apiRoutes: Routes[]; generalRoutes: Routes[] }) {
    this.app = express();
    this.env = NODE_ENV || "development";
    this.port = PORT || 3000;
    this.initializeMiddlewares();
    this.initializeRoutes(data.apiRoutes);
    this.initializeRoutes(data.generalRoutes, false);
  }

  public readonly listen = async () => {
    this.server = this.app.listen(this.port, () => {
      process.stdout.write("=================================\n");
      process.stdout.write(`======= ENV: ${this.env} ========\n`);
      process.stdout.write(`🚀 App listening on the port ${this.port}\n`);
      process.stdout.write("=================================\n");
    });
  };

  private readonly initializeMiddlewares = () => {
    // set
    this.app.set("trust proxy", 1);
    this.app.set("view engine", "ejs");
    this.app.set("views", path.join(__dirname, "./templates"));
    // Global Middlewares
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json({ limit: "200MB" }));
  };

  private readonly initializeRoutes = (routes: Routes[], setVersion = true) => {
    routes.forEach((route) => {
      this.app.use(route.router);
    });
  };
}
