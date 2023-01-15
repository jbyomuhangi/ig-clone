// import { AuthChecker } from "../../src";

import { AuthChecker } from "type-graphql";
import { MyContext } from "./types";

export const authChecker: AuthChecker<MyContext> = (
  { context },
  _roles
): boolean => {
  const { req } = context;

  /* Check if the user has been authenticated */
  if (!req.session.userId) return false;
  return true;
};
