import "reflect-metadata";

import { ApolloServer } from "apollo-server-express";
import connectRedis from "connect-redis";
import express from "express";
import session from "express-session";
import { GraphQLError, GraphQLFormattedError } from "graphql";
import Redis from "ioredis";
import path from "path";
import {
  ArgumentValidationError,
  buildSchema,
  UnauthorizedError,
} from "type-graphql";

import { authChecker } from "./authChecker";
import { AppDataSource } from "./data-source";
import { ErrorTypeEnum } from "./enums/errorTypeEnum";
import { COOKIE_NAME, PORT } from "./settings";
import { MyContext } from "./types";
import { createUserDataLoader } from "./dataLoaders/createUserDataLoader";

const main = async () => {
  /* Initialize the data source */
  const dataSource = await AppDataSource.initialize();

  /* Create express app */
  const app = express();

  /* Set up redis connection */
  const RedisStore = connectRedis(session);
  const redis = new Redis();

  /* Use express session in the app */
  app.use(
    session({
      name: COOKIE_NAME,
      store: new RedisStore({ client: redis, disableTouch: true }),
      saveUninitialized: false,
      secret: "wdwdOOKEJO22232Oosnwnonsiw",
      resave: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10, // 10 years,
        httpOnly: true,
        secure: false, // cookie only works in https if true
        sameSite: "lax",
      },
    })
  );

  /* Build the graphql schema */
  const schema = await buildSchema({
    resolvers: [path.join(__dirname, "./resolver/**/*.resolver.{ts,js}")],
    authChecker,
  });

  /* Initialize apollo server */
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({
      req,
      res,
      dataSource,
      userLoader: createUserDataLoader(),
    }),
    formatError: (error: GraphQLError): GraphQLFormattedError => {
      /* Handle validation errors specifically */
      if (error.originalError instanceof ArgumentValidationError) {
        const firstError = error.extensions.exception.validationErrors[0];
        return {
          message: Object.values(firstError.constraints)[0] as string,
          extensions: { type: ErrorTypeEnum.VALIDATION_ERROR },
        };
      }

      /* Handle authentication errors */
      if (error.originalError instanceof UnauthorizedError) {
        return {
          message: error.message,
          extensions: { type: ErrorTypeEnum.AUTHENTICATION_ERROR },
        };
      }

      return {
        message: "Undefined error",
        extensions: { type: ErrorTypeEnum.UNDEFINED_ERROR },
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
