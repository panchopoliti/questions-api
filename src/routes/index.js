/* eslint-disable new-cap */
const express = require('express');

const router = express.Router();
const questionRoutes = require('../controllers');

/* GET home page. */
router.get('/', questionRoutes.renderIndex);

router.get('/questions', questionRoutes.getAllQuestions);

router.get('/questions/:id', questionRoutes.getQuestion);

router.get('/questions/difficulty/:id', questionRoutes.getQuestionsByDifficulty);

router.get('/questions/:id/answers', questionRoutes.getAnswers);

router.get('/questions/answers/difficulty/:id', questionRoutes.getQuestionsWithAnswersByDifficulty);

module.exports = router;
