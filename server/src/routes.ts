import express from "express";
import knex from "./database/connection";

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.json(["danielson", "vanessa", "isadora", "dan"]);
});

routes.get("/items", async (request, response) => {
  const items = await knex("items").select("*");

  const serializedItems = items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      image_url: `http://localhost:3333/uploads/${item.image}`,
    };
  });
  return response.json(serializedItems);
});

routes.post("/points", async (request, response) => {
  /*  Utilizando desestruturação para atribuir cada valor vindo em request.body 
  para uma constante específica. É o mesmo que atribuir do modo abaixo:

  const name = request.body.name
  const email = request.body.email
  ...
  const uf = request.body.uf

  */
  const {
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
    items,
  } = request.body;

  const trx = await knex.transaction();

  /*Utilizando short sintax: quando o nome da variável é igual ao nome do objeto,
  podemos omitir o valor*/
  const insertedIds = await trx("points").insert({
    image: "image-fake",
    name,
    email,
    whatsapp,
    latitude,
    longitude,
    city,
    uf,
  });

  const pointItems = items.map((item_id: number) => {
    return {
      point_id: insertedIds[0],
      item_id,
    };
  });

  await trx("point_items").insert(pointItems);

  return response.json({ sucess: true });
});

export default routes;
