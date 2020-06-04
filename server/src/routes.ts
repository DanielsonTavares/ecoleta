import express from "express";
import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/", (request, response) => {
  return response.json(["danielson", "vanessa", "isadora", "dan"]);
});

/* Padrão de métodos para as controllers:
  index para listagens;
  show para um único item;
  create para criar um item;
  update para atualizar um item;
  delete para remover um item;
 */
routes.get("/items", itemsController.index);
routes.post("/points", pointsController.create);
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.get("/pointsall", pointsController.all);

export default routes;
