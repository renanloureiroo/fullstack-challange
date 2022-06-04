import request from "supertest";
import { app } from "../../../../setup.js";

describe("Authenticate user controller", () => {
  beforeAll(async () => {});

  it("should return a access_token", async () => {
    await request(app.callback())
      .post("/accounts/authenticate")
      .send({
        email: "johndoe@email.com",
        password: "123456",
      })
      .expect(200)
      .expect((response) => {
        expect(response.body).toHaveProperty("access_token");
      });
  });
});
