import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import Enrollment from "@/models/enrollment.model";
import db from "@/models";

class UserController {
  public index = async (req: Request, res: Response): Promise<any> => {
    const t = await db.transaction();
    try {
      const user = await User.create(
        {
          firstName: "sxdfgsdf",
          lastName: "sdfgd",
          Enrollment: {
            enrollmentNumber: "98765432182",
          },
        },
        { include: { model: Enrollment } },
        { transaction: t }
      );
      await t.commit();
      res.send(user);

      // return user;
    } catch (err) {
      await t.rollback();
      console.log(err);
    }
  };
}

export default UserController;
