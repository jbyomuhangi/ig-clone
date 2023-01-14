import { GraphQLError } from "graphql";
import { MiddlewareFn } from "type-graphql";

import { MyContext } from "../types";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new GraphQLError("User not authenticated");
  }

  return next();
};
