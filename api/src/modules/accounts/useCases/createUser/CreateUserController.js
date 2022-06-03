class CreateUserController {
  createUserUseCase;
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(ctx) {
    const { name, username, email, password } = ctx.request.body;

    const user = await this.createUserUseCase.execute({
      name,
      username,
      email,
      password,
    });

    ctx.status = 201;
    ctx.body = user;
  }
}

export { CreateUserController };
