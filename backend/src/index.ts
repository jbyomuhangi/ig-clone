import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import express from "express";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import { ArgumentValidationError, buildSchema } from "type-graphql";

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
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      /* Handle validation errors specifically */
      if (error.originalError instanceof ArgumentValidationError) {
        const firstError = error.extensions.exception.validationErrors[0];
        return { message: Object.values(firstError.constraints)[0] as string };
      }

      return {
        message: "Undefined error",
        extensions: { error },
      };
    },
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
};

main().catch((error) => console.error(error));
