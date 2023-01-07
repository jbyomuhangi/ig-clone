import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import { AppDataSource } from "./data-source";
import { UserResolver } from "./resolver/user/userResolver";
import { PORT } from "./settings";
import { MyContext } from "./types";

const main = async () => {
  /* Initialize the data source */
  const dataSource = await AppDataSource.initialize();

  const app = express();

  /* Build the graphql schema */
  const schema = await buildSchema({ resolvers: [UserResolver] });

  /* Initialize apollo server */
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({ req, res, dataSource }),
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
};

main().catch((error) => console.error(error));
