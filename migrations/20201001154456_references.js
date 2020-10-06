
exports.up = function(knex) {
  return knex.schema.table('questions', (table) => {
    table.integer('difficulty_id').references('difficulty');
  })
  .then(() => {
    return knex.schema.createTable('questions_answers', (table) => {
      table.integer('question_id').references('questions');
      table.integer('answers_id').references('answers');
      table.bool('is_right_answer').notNullable();
      table.primary(['question_id', 'answers_id'])
    });
  });
};

exports.down = function(knex) {
  return knex.schema.table('questions', (table) => {
    table.dropColumn('difficulty_id');
  })
  .then(() => {
    knex.schema.dropTable('questions_answers');
  });
};
