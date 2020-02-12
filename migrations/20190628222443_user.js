exports.up = async function(knex, Promise) {
  await knex.schema.hasTable("user");

  return await knex.schema.createTable("user", table => {
    table.increments("id").primary(),
      table.string("fullName"),
      table.string("email"),
      table.string("password"),
      table.string("phone"),

  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("user");
};
