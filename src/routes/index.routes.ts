import { Router } from "express";
import UserController from "@/controllers/user.controller";
import { Routes } from "@/interfaces/routes.interface";

class IndexRoute implements Routes {
  public path = "";

  public router = Router();

  public indexController = new UserController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/`, this.indexController.index);
  }
}

export default IndexRoute;
