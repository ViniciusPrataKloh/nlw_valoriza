import { Request, Response, NextFunction } from "express";

export function ensureAdmin(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  // Verifica permissao de usuario
  const admin = false;

  if (admin) {
    return next();
  }

  return reponse.status(401).json({
    error: "Unathorized",
  });
}