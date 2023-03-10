import { Request, Response } from "express";
import { DataSource } from "typeorm";

import { createUserDataLoader } from "./dataLoaders/createUserDataLoader";

declare module "express-session" {
  interface SessionData {
    userId?: number;
  }
}

/* Type def for context returned from apollo server */
export type MyContext = {
  req: Request;
  res: Response;
  dataSource: DataSource;
  userLoader: ReturnType<typeof createUserDataLoader>;
};
