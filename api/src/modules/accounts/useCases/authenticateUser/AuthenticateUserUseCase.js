import bcryptjs from "bcryptjs";
import jtw from "jsonwebtoken";
class AuthenticateUserUseCase {
  usersRepository;
  constructor(usersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute({ email, password }) {
    const userExits = await this.usersRepository.findByEmail(email);

    if (!userExits) {
      throw new Error("Invalid email or password");
    }

    const isPasswordValid = await bcryptjs.compare(
      password,
      userExits.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid email or password");
    }
    const accessToken = jtw.sign({}, process.env.JWT_SECRET, {
      expiresIn: "1h",
      subject: userExits.id,
    });

    return { access_token: accessToken };
  }
}

export { AuthenticateUserUseCase };
