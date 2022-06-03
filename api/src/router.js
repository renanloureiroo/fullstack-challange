import Router from "@koa/router";
import { tweetsRoutes } from "./routes/tweets.routes.js";
import { usersRoutes } from "./routes/users.routes.js";

export const router = new Router();

router.use("/users", usersRoutes.routes());
router.use("/tweets", tweetsRoutes.routes());
