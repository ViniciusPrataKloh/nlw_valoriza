import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

export async function ensureAdmin(
  request: Request,
  reponse: Response,
  next: NextFunction
) {
  // Recupera o id do usuario pelo request
  const { user_id } = request;

  // Verifica permissao de usuario
  const userRepository = getCustomRepository(UsersRepositories);
  const { admin } = await userRepository.findOne(user_id);

  if (admin) {
    return next();
  }

  return reponse.status(401).json({
    error: "Unauthorized",
  });
}