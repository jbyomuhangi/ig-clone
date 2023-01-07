import path from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "joel",
  password: "admin",
  database: "ig_clone_db",
  logging: false,
  entities: [path.join(__dirname, "./entity/*")],
  migrations: [path.join(__dirname, "./migration/*")],
  subscribers: [],
});
