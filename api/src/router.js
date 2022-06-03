import Router from "@koa/router";
import { usersRoutes } from "./routes/users.routes.js";

export const router = new Router();

router.use("/users", usersRoutes.routes());
