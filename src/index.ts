import cors from "@elysiajs/cors";
import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { cfEnv, handleWorker } from "./plugins/cf";
import { Env } from "./type";

const app = new Elysia({ aot: false })
  .use(swagger())
  .use(cors())
  .use(cfEnv<Env>());

app.get("/", (c) => {
  return "Hello Elysia. " + c.env.TEST;
});

export default handleWorker(app);
