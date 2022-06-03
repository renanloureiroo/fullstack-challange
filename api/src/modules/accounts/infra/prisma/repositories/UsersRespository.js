import { prisma } from "../../../../../database/prisma/index.js";

class UserRepository {
  async create({ name, username, email, password }) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        username,
        password,
      },
    });

    return user;
  }
}

export { UserRepository };
