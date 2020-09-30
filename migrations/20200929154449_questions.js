exports.up = (knex, Promise) => {
  return knex.schema.createTable('questions_knex', (table) => {
    table.increments('question_id');
    table.string('question');
    table.timestamps();
  });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('questions_knex');
};
