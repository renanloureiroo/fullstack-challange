class CreateTweetUseCase {
  tweetsRepository;
  constructor(tweetsRepository) {
    this.tweetsRepository = tweetsRepository;
  }

  async execute({ userId, text }) {
    const tweet = await this.tweetsRepository.create({ userId, text });

    return tweet;
  }
}

export { CreateTweetUseCase };
