class CreateTweetController {
  CreateTweetUseCase;
  constructor(CreateTweetUseCase) {
    this.CreateTweetUseCase = CreateTweetUseCase;
  }

  async handle(ctx) {
    const { userId, text } = ctx.request.body;
    const tweet = await this.CreateTweetUseCase.execute({ userId, text });

    ctx.status = 201;
    ctx.body = tweet;
  }
}

export { CreateTweetController };
