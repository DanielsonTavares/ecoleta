import express from "express";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json(["danielson", "vanessa", "isadora", "dan"]);
});

export default routes;
