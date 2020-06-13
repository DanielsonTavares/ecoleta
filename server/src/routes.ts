import express from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const upload = multer(multerConfig);

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
routes.get("/points", pointsController.index);
routes.get("/points/:id", pointsController.show);
routes.get("/pointsall", pointsController.all);

/**O upload.single está sendo utilizado para restringir o envio a uma única imagem.
 * Se fosse para enviar mais de uma, usariamos upload.array('nome_do_campo')
 */
routes.post("/points", upload.single("image"), pointsController.create);

export default routes;
