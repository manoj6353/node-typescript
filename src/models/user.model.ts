import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  Table,
  UpdatedAt,
  HasOne,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { UserAttributes } from "../interfaces/user.interface";
import Enrollment from "@/models/enrollment.model";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Users",
})
export default class User extends Model<UserAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @HasOne(() => Enrollment, {
    constraints: false,
    as: "enrollments",
    foreignKey: "userID",
  })
  enrollments: Enrollment;
}
