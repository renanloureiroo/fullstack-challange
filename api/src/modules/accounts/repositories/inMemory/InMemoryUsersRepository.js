class InMemoryUsersRepository {
  users;
  constructor() {
    this.users = [];
  }

  async create({ name, username, email, password }) {
    const user = {
      id: this.users.length + 1,
      name,
      username,
      email,
      password,
    };

    this.users.push(user);

    return user;
  }
}

InMemoryUsersRepository;
