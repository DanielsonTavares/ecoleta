import { Request, Response } from "express";
import knex from "../database/connection";

class PointsController {
  async index(request: Request, response: Response) {
    const { city, uf, items } = request.query;

    const parsedItems = String(items)
      .split(",")
      .map((item) => Number(item.trim()));

    const points = await knex("points")
      .join("point_items", "point_id", "=", "point_items.point_id")
      //.whereIn("point_items.item_id", parsedItems)
      .where("city", String(city))
      .where("uf", String(uf))
      .distinct()
      .select("points.*");

    const serializedPoints = points.map((item) => {
      return {
        ...item,
        image_url: `http://192.168.1.75:3333/uploads/${item.image}`,
      };
    });

    return response.json(points);
  }

  async show(request: Request, response: Response) {
    const { id } = request.params; //Desestruturação: equivale a id = request.params.id;
    const point = await knex("points").where("id", id).first(); //o .first() está sendo utilizado para garantir que não seja retornado um array

    if (!point) {
      return response.status(400).json({ message: "Point not found" });
    }

    const items = await knex("items")
      .join("point_items", "items.id", "=", "point_items.item_id")
      .where("point_items.point_id", id)
      .select("items.title");

    const serializedPoint = {
      ...point,
      image_url: `http://192.168.1.75:3333/uploads/${point.image}`,
    };

    return response.json({ point: serializedPoint, items });
  }

  async create(request: Request, response: Response) {
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

    const point = {
      image: request.file.filename,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    };

    /*Utilizando short sintax: quando o nome da variável é igual ao nome do objeto,
    podemos omitir o valor*/
    const insertedIds = await trx("points").insert(point);
    const point_id = insertedIds[0];

    const pointItems = items
      .split(",")
      .map((item: string) => Number(item.trim()))
      .map((item_id: number) => {
        return {
          point_id,
          item_id,
        };
      });

    await trx("point_items").insert(pointItems);

    await trx.commit();
    return response.json({
      id: point_id,
      ...point,
    });
  }

  async all(request: Request, response: Response) {
    const allPoints = await knex("points").select("id", "name");
    return response.json(allPoints);
  }
}
export default PointsController;
