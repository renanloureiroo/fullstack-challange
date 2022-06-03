import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository.js";
import { CreateUserUseCase } from "./CreateUserUseCase.js";

let inMemoryUsersRepository;
let createUserUseCase;

describe("Create user use case", () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });
  it("should be able create a new user", async () => {
    const user = await createUserUseCase.execute({
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@email.com",
      password: "123456",
    });

    expect(user).toHaveProperty("id");
  });
  it("should throw a new error if email already register", async () => {
    await inMemoryUsersRepository.create({
      name: "John Doe",
      username: "johndoe",
      email: "johndoe@email.com",
      password: "123456",
    });

    await expect(
      createUserUseCase.execute({
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@email.com",
        password: "123456",
      })
    ).rejects.toThrow("User already exists");
  });
});
