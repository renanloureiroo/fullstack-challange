class AuthenticateUserController {
  authenticateUserUseCase;

  constructor(authenticateUserUseCase) {
    this.authenticateUserUseCase = authenticateUserUseCase;
  }
  async handle(ctx) {
    const { email, password } = ctx.request.body;

    authenticateUserUseCase.execute({ email, password });
  }
}
export { AuthenticateUserController };
