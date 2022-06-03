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

  async findByEmail(email) {
    const user = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    return user;
  }
}

export { UsersRepository };
