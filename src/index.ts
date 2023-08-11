import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import { cfEnv, handleWorker } from "./plugins/cf";

type Env = {
  TEST: string;
};

const app = new Elysia({ aot: false }).use(swagger()).use(cfEnv<Env>());
app.get("/", (c) => {
  return "Hello Elysia. " + c.env.TEST;
});

export default handleWorker(app);
