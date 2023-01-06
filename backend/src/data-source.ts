import "reflect-metadata";
import { DataSource } from "typeorm";

import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "joel",
  password: "admin",
  database: "ig_clone_db",
  logging: false,
  entities: [User],
  migrations: [],
  subscribers: [],
});

// export const connectionSource = new DataSource({
//     entities: ['src/**/**.entity{.ts,.js}'],
//     migrations: ['src/migrations/**/*{.ts,.js}'],
//     subscribers: ['src/subscriber/**/*{.ts,.js}'],
// });

// "migration:generate": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:generate -d src/modules/config/ormconfig.ts",
// "migration:up": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:run -d src/modules/config/ormconfig.ts",
// "migration:down": "./node_modules/.bin/ts-node ./node_modules/.bin/typeorm migration:revert -d src/modules/config/ormconfig.ts",
