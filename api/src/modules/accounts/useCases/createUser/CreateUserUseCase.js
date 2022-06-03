import bcrypt from "bcryptjs";

class CreateUserUseCase {
  usersRepository;
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, username, email, password }) {
    const passwordHash = await bcrypt.hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
