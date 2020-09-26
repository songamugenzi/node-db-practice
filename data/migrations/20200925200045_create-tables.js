exports.up = function (knex) {
  return knex.schema
    .createTable("shows", (tbl) => {
      tbl.increments("id");
      tbl.text("name", 128).unique().notNullable();
      tbl.text("description");
      tbl.boolean("watched", false).notNullable();
    })
    .createTable("genre", (tbl) => {
      tbl.increments("id");
      tbl.text("name", 128).unique().notNullable();
    })
    .createTable("character", (tbl) => {
      tbl.increments("id");
      tbl.text("description").notNullable();
      tbl.text("actor/actress");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("character")
    .dropTableIfExists("genre")
    .dropTableIfExists("shows");
};
