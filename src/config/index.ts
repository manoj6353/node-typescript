import { config } from "dotenv";

config({ path: `.env.${process.env.NODE_ENV || "development"}` });
export const { DATABASE_URL, PORT, NODE_ENV } = process.env;
