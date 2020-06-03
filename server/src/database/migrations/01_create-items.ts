import Knex from "knex";

export async function up(knex: Knex) {
  //realizar a alteração no Banco de Dados
  return knex.schema.createTable("items", (table) => {
    table.increments("id").primary();
    table.string("image").notNullable();
    table.string("title").notNullable();
  });
}

export async function down(knex: Knex) {
  //desfazer a alteração ralizada pelo up
  return knex.schema.dropTable("items");
}
