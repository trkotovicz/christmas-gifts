import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';
import { ErrorTypes } from '../errors/catalog';

const keyStClaus = process.env.API_KEY_STCLAUS;
const keyAdmin = process.env.API_KEY_ADMIN;

export function authMiddleware(req: Request, _res: Response, next: NextFunction) {
  const apiKey = req.headers['api-key'];

  if (!apiKey) throw new Error(ErrorTypes.ApiKeyNotFound);

  if (apiKey !== keyStClaus && apiKey !== keyAdmin) throw new Error(ErrorTypes.UnauthorizedError);

  next();
}

export function sendEmailMiddleware(req: Request, _res: Response, next: NextFunction) {
  const apiKey = req.headers['api-key'];

  if (!apiKey) throw new Error(ErrorTypes.ApiKeyNotFound);

  if (apiKey !== keyStClaus) throw new Error(ErrorTypes.UnauthorizedError);

  next();
}
