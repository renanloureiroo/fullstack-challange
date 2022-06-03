import request from "supertest";
import { app } from "../../../../setup.js";
import { prisma } from "../../../../database/prisma/index.js";

describe("Create user controller", () => {
  afterAll(async () => {
    await prisma.user.deleteMany();
    await prisma.$disconnect();
  });

  it("should be able to create a new user", async () => {
    await request(app.callback())
      .post("/users")
      .send({
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@email.com",
        password: "123456",
      })
      .expect(201);
  });
});
