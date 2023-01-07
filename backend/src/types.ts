import { Request, Response } from "express";
import { DataSource } from "typeorm";

/* Type def for context returned from apollo server */
export type MyContext = {
  req: Request;
  res: Response;
  dataSource: DataSource;
};
