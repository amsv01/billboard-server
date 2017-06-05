
exports.up = (knex, Promise) => Promise.all([
  knex.raw('create extension if not exists "uuid-ossp"'),
  knex.schema.createTable('currencies', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.string('symbol').notNullable();
    table.string('p_name').notNullable();
    table.string('e_name');
    table.text('icon_url').notNullable();
    table.text('description');
    table.timestamps(true, true);
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('currencies')
]);
