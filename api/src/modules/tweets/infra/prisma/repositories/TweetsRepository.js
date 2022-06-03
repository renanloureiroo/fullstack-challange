import { prisma } from "../../../../../database/prisma/index.js";

class TweetsRepository {
  async create({ text, userId }) {
    const tweet = await prisma.tweet.create({
      data: {
        text,
        userId,
      },
      include: {
        user: true,
      },
    });

    return tweet;
  }
}

export { TweetsRepository };
