import { getCustomRepository } from "typeorm";
import { ComplimentRepositories } from "../repositories/ComplimentsRepository";


class ListUserSendComplimentsService {
  async execute(user_id: string) {
    const complimentsRespository = getCustomRepository(ComplimentRepositories);

    const compliments = await complimentsRespository.find({
      where: {
        user_sender: user_id,
      },
    });

    return compliments;
  }
}

export { ListUserSendComplimentsService };