import { UsersRepositorires } from "../repositories/UsersRepositories"
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string,
  email: string,
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepositorires);

    if (!email) {
      throw new Error("Email incorrect.");
    }

    const alreadyExists = await usersRepository.findOne({
      email
    });

    if (alreadyExists) {
      throw new Error("User already exists.");
    }

    const user = usersRepository.create({
      name,
      email,
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService }