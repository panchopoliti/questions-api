const db = require('../db');

function getDbTable(tableName) {
  return db(tableName).select();
}

exports.getQuestions = () => getDbTable('questions');
