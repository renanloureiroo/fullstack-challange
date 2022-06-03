import { prisma } from "../../../../../database/prisma";

class TweetsRepository {
  async create({ text, userId }) {
    const tweet = await prisma.tweet.create({
      data: {
        text,
        userId,
      },
    });

    return tweet;
  }
}

export { TweetsRepository };
