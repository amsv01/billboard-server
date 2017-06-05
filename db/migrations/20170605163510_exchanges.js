exports.up = (knex, Promise) => Promise.all([
  knex.raw('create extension if not exists "uuid-ossp"'),
  knex.schema.createTable('exchanges', (table) => {
    table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'));
    table.uuid('id_currency').references('id').inTable('currencies').onDelete('CASCADE');
    table.dateTime('insert').notNullable();
    table.decimal('rate', 3);
    table.decimal('sell_rate', 12).notNullable();
    table.decimal('buy_rate', 12).notNullable();
    table.boolean('is_changed').defaultTo(true);
    table.timestamps(true, true);
  })
]);

exports.down = (knex, Promise) => Promise.all([
  knex.schema.dropTable('exchanges')
]);
