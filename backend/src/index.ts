import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(async () => {
    console.log("data source initialized");
  })
  .catch((error) => console.log(error));
