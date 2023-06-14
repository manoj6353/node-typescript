import db from "@/models";
import { Request } from "express";
import { Model, Op, Transaction } from "sequelize";
import User from "@models/user.model";
import BaseRepository from "./base.repository";

export default class UserRepo extends BaseRepository<User> {
  constructor() {
    super(User.name);
  }
}
