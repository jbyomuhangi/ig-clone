import "reflect-metadata";
import { DataSource } from "typeorm";

const main = async () => {
  const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "joel",
    password: "admin",
    database: "ig_clone_db",
    entities: [],
    //   synchronize: true,
    logging: true,
  });

  const dataSource = await AppDataSource.initialize();
};

main().catch((err) => {
  console.error(err);
});
