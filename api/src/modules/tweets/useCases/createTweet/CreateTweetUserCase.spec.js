import { InMemoryTweetsRepository } from "../../repositories/inMemory/InMemoryTweetsRepository.js";
import { CreateTweetUseCase } from "../../useCases/createTweet/CreateTweetUseCase.js";

let inMemoryTweetsRepository;
let createTweetUserCase;

describe("Create tweet use case", () => {
  beforeEach(() => {
    inMemoryTweetsRepository = new InMemoryTweetsRepository();
    createTweetUserCase = new CreateTweetUseCase(inMemoryTweetsRepository);
  });

  it("should be able create a new tweet", async () => {
    const tweet = await createTweetUserCase.execute({
      text: "Hello world",
      userId: 1,
    });

    expect(tweet).toHaveProperty("id");
  });
});
