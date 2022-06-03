import { prisma } from "../../../../../database/prisma/index.js";

class UsersRepository {
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

export { UsersRepository };
