import { Request, Response } from "express";
import { DataSource } from "typeorm";

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
};
