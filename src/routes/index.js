/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const questionRoutes = require('../controllers');

/* GET home page. */
router.get('/', questionRoutes.renderIndex);

router.get('/questions', questionRoutes.renderQuestions);

module.exports = router;
