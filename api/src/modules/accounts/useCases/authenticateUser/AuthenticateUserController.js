class AuthenticateUserController {
  authenticateUserUseCase;

  constructor(authenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }
  async handle(ctx) {
    const { email, password } = ctx.request.body;

    try {
      const access_token = await this.authenticateUserUseCase.execute({
        email,
        password,
      });

      ctx.body = { access_token };
    } catch (err) {
      ctx.status = 400;
      ctx.body = { error: err.message };
    }
  }
}
export { AuthenticateUserController };
