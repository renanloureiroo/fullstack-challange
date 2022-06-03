import Router from "@koa/router";
import { UsersRepository } from "../modules/accounts/infra/prisma/repositories/UsersRepository.js";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController.js";
import { CreateUserUseCase } from "../modules/accounts/useCases/createUser/CreateUserUseCase.js";

export const usersRoutes = new Router();

const usersRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(usersRepository);
const createUserController = new CreateUserController(createUserUseCase);

usersRoutes.post("/", async (ctx) => {
  await createUserController.handle(ctx);
});
