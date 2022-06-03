import Router from "@koa/router";
import { TweetsRepository } from "../modules/tweets/infra/prisma/repositories/TweetsRepository.js";
import { CreateTweetController } from "../modules/tweets/useCases/createTweet/CreateTweetController.js";
import { CreateTweetUseCase } from "../modules/tweets/useCases/createTweet/CreateTweetUseCase.js";

const tweetsRoutes = new Router();

const tweetsRepository = new TweetsRepository();
const createTweetUseCase = new CreateTweetUseCase(tweetsRepository);
const createTweetController = new CreateTweetController(createTweetUseCase);

tweetsRoutes.post("/", async (ctx) => {
  await createTweetController.handle(ctx);
});

export { tweetsRoutes };
