import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Receber token
  const authToken = request.headers.authorization;
  //console.log(token);

  // Verificar se token está preenchido
  if (!authToken) {
    return response.status(401).end();
  }

  // Verificar se token é válido 
  const [, token] = authToken.split(" ");

  // Recuperar informações do usuário
  try {
    const { sub } = verify(token, "1709560334811baa8925670be3f032b2") as IPayLoad;
    request.user_id = sub;
  } catch (err) {
    response.status(401).end();
  }

  return next();
}