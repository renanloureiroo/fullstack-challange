import { InMemoryUsersRepository } from "../../repositories/inMemory/InMemoryUsersRepository.js";

describe("Create user use case", () => {
  beforeEach(() => {
    const inMemoryUsersRepository = new InMemoryUsersRepository();
  });
  test("sum 1 + 1", () => {
    expect(1 + 1).toBe(2);
  });
});
