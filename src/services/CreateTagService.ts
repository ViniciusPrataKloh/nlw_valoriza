import { TagsRepositories } from "../repositories/TagsRepositories";
import { getCustomRepository } from "typeorm";

class CreateTagService {
  async execute(name: string) {
    const tagsRepository = getCustomRepository(TagsRepositories);

    if (!name) {
      throw new Error("Incorrect name.");
    }

    const alreadyExists = await tagsRepository.findOne({
      name
    });

    if (alreadyExists) {
      throw new Error("Name of tag already exists.");
    }

    const tag = tagsRepository.create({
      name
    });

    await tagsRepository.save(tag);
    return tag;
  }
}

export { CreateTagService }