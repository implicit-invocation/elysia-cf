import { Elysia } from "elysia";

export const handleWorker = (app: Elysia<any, any>) => {
  return {
    fetch(req: Request, env: any) {
      (req as any).env = env;
      return app.handle(req);
    },
  };
};

export const cfEnv = <T>() =>
  new Elysia().derive<{ env: T }>((req) => {
    const env = (req.request as any).env as T;
    return {
      env,
    };
  });
