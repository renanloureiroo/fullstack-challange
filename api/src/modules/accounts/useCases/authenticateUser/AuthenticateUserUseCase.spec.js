import bcryptjs from "bcryptjs";
import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let usersRepository;
let authenticateUserUseCase;
let user;

describe("Authenticate user use case", () => {
  beforeEach(async () => {
    usersRepository = new InMemoryUsersRepository();
    authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);

    const hashedPassword = await bcryptjs.hash("123456", 8);

    user = await usersRepository.create({
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@email.com",
      password: hashedPassword,
    });
  });

  it("should be able authenticate a user", async () => {
    const response = await authenticateUserUseCase.execute({
      email: "johndoe@email.com",
      password: "123456",
    });

    expect(response).toHaveProperty("access_token");
  });

  it("should not be able to authenticate a user with invalid email", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: user.email,
        password: "incorrect_password",
      })
    ).rejects.toThrow("Invalid credentials");
  });

  it("should not be able to authenticate a user with invalid password", async () => {
    await expect(
      authenticateUserUseCase.execute({
        email: "incorrectEmail@email.com",
        password: user.password,
      })
    ).rejects.toThrow("Invalid credentials");
  });
});
