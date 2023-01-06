import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";

import { AppDataSource } from "./data-source";
import { HelloResolver } from "./resolver/hello";
import { PORT } from "./settings";

const main = async () => {
  /* Initialize the data source */
  const dataSource = await AppDataSource.initialize();

  const app = express();

  /* Build the graphql schema */
  const schema = await buildSchema({
    resolvers: [HelloResolver],
    validate: false,
  });

  /* Initialize apollo server */
  const apolloServer = new ApolloServer({ schema });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT} `);
  });
};

main().catch((error) => console.error(error));
