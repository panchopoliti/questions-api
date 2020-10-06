const Knex = require('knex');
/* eslint-disable arrow-body-style */
const db = require('../db');

function getDbTable(tableName) {
  return db(tableName).select();
}

exports.getAllQuestions = () => getDbTable('questions');

exports.getQuestion = (id) => {
  return getDbTable('questions')
    .where('question_id', id);
};

exports.getQuestionsByDifficulty = (difficultyId, numOfQuestions) => {
  return getDbTable('questions')
    .where('difficulty_id', difficultyId)
    .orderByRaw('RANDOM()')
    .limit(numOfQuestions);
};

exports.getAnswers = (questionId) => {
  return db('answers')
    .leftJoin('questions_answers', 'answers.answer_id', 'questions_answers.answer_id')
    .where('question_id', questionId);
};

exports.getQuestionsWithAnswersByDifficulty = (difficultyId, numOfQuestions) => {
  const subquery = db('questions')
    .where('difficulty_id', difficultyId)
    .orderByRaw('RANDOM()')
    .limit(numOfQuestions)
    .as('q');

  return db.select('*').from(subquery)
    .innerJoin({ qa: 'questions_answers' }, 'q.question_id', 'qa.question_id')
    .innerJoin({ a: 'answers' }, 'a.answer_id', 'qa.answer_id');
};
