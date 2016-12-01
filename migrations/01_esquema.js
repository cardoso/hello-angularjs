// migrations/20161201195512_esquema_do_banco.js
exports.up = function(knex, Promise) {
  return knex.schema.createTable("evento", (table) => {
    table.increments("idevento");
    table.string("dscevento").notNullable();
    table.date("dtevento").notNullable();
  }).createTable("participante", (table) => {
    table.increments("idparticipante");
    table.string("nomeparticipante").notNullable();
  }).createTable("evento_participante", (table) => {
    table.integer("idevento").notNullable().references("evento.idevento");
    table.integer("idparticipante").notNullable().references("participante.idparticipante");
    table.primary(["idevento","idparticipante"]);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema//
    .dropTable("evento_participante")// última criada, primeira removida
    .dropTable("participante")//
    .dropTable("evento");
};
