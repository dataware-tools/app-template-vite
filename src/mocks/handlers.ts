// src/mocks/handlers.js
import { rest } from "msw";
export const handlers = [
  rest.get("/mock-url", (_, res, ctx) => {
    return res(
      // Respond with a 200 status code
      ctx.json({ mock: "enabled" }),
      ctx.status(200)
    );
  }),
];
