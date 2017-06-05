
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return Promise.join(
    knex('currencies').del(),
    knex('exchanges').del()
  );
};
