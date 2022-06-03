class InMemoryTweetsRepository {
  tweets;

  constructor() {
    this.tweets = [];
  }

  async create({ text, userId }) {
    const tweet = {
      id: this.tweets.length + 1,
      text,
      userId,
      createdAt: new Date(),
    };

    this.tweets.push(tweet);
    return tweet;
  }
}

export { InMemoryTweetsRepository };
