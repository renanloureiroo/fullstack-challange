import bcrypt from "bcryptjs";

class CreateUserUseCase {
  usersRepository;
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ name, username, email, password }) {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export { CreateUserUseCase };
