import { prisma } from "../../../../database/prisma";
import bcrypt from "bcryptjs";
import { app } from "../../../../setup";
import request from "supertest";
let user;

describe("Create tweet controller", () => {
  beforeAll(async () => {
    const hashedPassword = await bcrypt.hash("123456", 8);
    user = await prisma.user.create({
      data: {
        name: "John Doe",
        username: "johndoe",
        email: "johndoe@email",
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

  it("should be able to create a new tweet", async () => {
    await request(app.callback())
      .post("/tweets")
      .send({
        text: "Hello world",
        userId: user.id,
      })
      .expect(201);
  });
});
