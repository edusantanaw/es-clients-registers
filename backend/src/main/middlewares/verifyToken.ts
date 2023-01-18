import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization;
    if (!authorization) throw "Access denied!";
    const [, token] = authorization.split(" ");
    if (!token) throw "Access denied!";
    const decoded = await verify(token, "secret");
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
};
