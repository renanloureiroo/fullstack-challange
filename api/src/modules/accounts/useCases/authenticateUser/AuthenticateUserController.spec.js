import request from "supertest";
import { app } from "../../../../setup.js";
import { prisma } from "../../../../database/prisma/index.js";
import bcryptjs from "bcryptjs";

let user;

describe("Authenticate user controller", () => {
  beforeAll(async () => {
    const hashedPassword = await bcryptjs.hash("123456", 8);
    await prisma.user.create({
      data: {
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@email.com",
        password: hashedPassword,
      },
    });
  });

  afterAll(async () => {
    const deleteTweets = prisma.tweet.deleteMany();
    const deleteUsers = prisma.user.deleteMany();

    await prisma.$transaction([deleteTweets, deleteUsers]);
    await prisma.$disconnect();
  });

  it("should return a access_token", async () => {
    await request(app.callback())
      .post("/users/authenticate")
      .send({
        email: "johndoe@email.com",
        password: "123456",
      })
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveProperty("access_token");
      });
  });

  it('should return a "Invalid credentials" error', async () => {
    await request(app.callback())
      .post("/users/authenticate")
      .send({
        email: "johndoe@email.com",
        password: "incorrect_password",
      })
      .expect(400)
      .expect((response) => {
        expect(response.body).toEqual({
          error: "Invalid credentials",
        });
      });
  });
});
