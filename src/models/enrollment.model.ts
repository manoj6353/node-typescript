// import { DataTypes, Model } from "sequelize";
// import {
//   BelongsTo,
//   Column,
//   CreatedAt,
//   DeletedAt,
//   ForeignKey,
//   Table,
//   UpdatedAt,
// } from "sequelize-typescript";
// import { EnrollmentAttributes } from "./interfaces/enrollment.interface";
// import User from "./user.model";
// @Table({
//   timestamps: true,
//   paranoid: true,
//   tableName: "Enrollments",
// })
// export default class Enrollment extends Model<EnrollmentAttributes> {
//   @Column({
//     primaryKey: true,
//     autoIncrement: true,
//     allowNull: false,
//     type: DataTypes.INTEGER,
//   })
//   id: number;

//   @ForeignKey(() => User)
//   @Column
//   userId: number;

//   @Column
//   enrollmentNumber: string;

//   @CreatedAt
//   createdAt: Date;

//   @UpdatedAt
//   updatedAt: Date;

//   @DeletedAt
//   deletedAt: Date;

//   @BelongsTo(() => User)
//   enrollment: User;
// }

import {
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  ForeignKey,
  Table,
  UpdatedAt,
  BelongsTo,
} from "sequelize-typescript";
import { DataTypes } from "sequelize";
import { EnrollmentAttributes } from "@/interfaces/enrollment.interface";
import User from "./user.model";

@Table({
  timestamps: true,
  paranoid: true,
  tableName: "Enrollments",
})
export default class Enrollment extends Model<EnrollmentAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: DataTypes.INTEGER,
  })
  id: number;

  @Column
  name: string;

  @Column
  title: string;

  @ForeignKey(() => User)
  @Column(DataTypes.INTEGER)
  userId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;

  @BelongsTo(() => User, { foreignKey: "userId", as: "user" })
  user: User;
}
