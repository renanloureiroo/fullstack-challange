import Router from "@koa/router";
import { UsersRepository } from "../modules/accounts/infra/prisma/repositories/UsersRepository.js";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController.js";
import { CreateUserUseCase } from "../modules/accounts/useCases/createUser/CreateUserUseCase.js";
import { AuthenticateUserUseCase } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserUseCase.js";
import { AuthenticateUserController } from "../modules/accounts/useCases/authenticateUser/AuthenticateUserController.js";

export const usersRoutes = new Router();

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
const authenticateUserController = new AuthenticateUserController(
  authenticateUserUseCase
);

usersRoutes.post("/", async (ctx) => {
  await createUserController.handle(ctx);
});

usersRoutes.post("/authenticate", async (ctx) => {
  await authenticateUserController.handle(ctx);
});
