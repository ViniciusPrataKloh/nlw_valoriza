import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentsRepository";


class ListUserReceiveComplimentsService {
  async execute(user_id: string) {
    const complimentsRespository = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRespository.find({
      where: {
        user_receiver: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserReceiveComplimentsService };