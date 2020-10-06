
exports.up = (knex, Promise) => {
  return knex.schema.createTable('questions', (table) => {
    table.increments('question_id');
    table.string('question').notNullable().unique();
    table.timestamps();
  })
    .then(() => {
      return knex.schema.createTable('difficulties', (table) => {
        table.increments('difficulty_id');
        table.string('difficulty', 30).notNullable().unique();
        table.timestamps();
      });
    })
    .then(() => {
      return knex.schema.createTable('answers', (table) => {
        table.increments('answer_id');
        table.string('answer', 50).notNullable().unique();
        table.timestamps();
      }); 
    });
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('questions')
    .then(knex.schema.dropTable('difficulties'))
    .then(knex.schema.dropTable('answers'));
};
