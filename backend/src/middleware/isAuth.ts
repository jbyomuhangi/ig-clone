import { AuthenticationError } from "apollo-server-express";
import { MiddlewareFn } from "type-graphql";

import { MyContext } from "../types";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.userId) {
    throw new AuthenticationError("User not authenticated");
  }

  return next();
};
