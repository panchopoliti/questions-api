const omit = require('lodash.omit');
const pick = require('lodash.pick');
const services = require('../services');

exports.renderIndex = (req, res) => res.render('index', { title: 'Express' });

exports.getAllQuestions = (req, res, next) => {
  services.getAllQuestions()
    .then((questions) => {
      res.json({ questions });
    })
    .catch(next);
};

exports.getQuestion = (req, res, next) => {
  const { id } = req.params;

  services.getQuestion(id)
    .then((question) => {
      res.json({ question });
    })
    .catch(next);
};

exports.getQuestionsByDifficulty = (req, res, next) => {
  const { id: difficultyId } = req.params;
  const { limit } = req.query;

  const numOfQuestions = parseInt(limit, 10);

  services.getQuestionsByDifficulty(difficultyId, numOfQuestions)
    .then((questions) => {
      res.json({ questions });
    })
    .catch(next);
};

exports.getAnswers = (req, res, next) => {
  const { id: questionId } = req.params;
  services.getAnswers(questionId)
    .then((answers) => {
      res.json({ answers });
    })
    .catch(next);
};

exports.getQuestionsWithAnswersByDifficulty = (req, res, next) => {
  const { id: difficultyId } = req.params;
  const { limit } = req.query;

  const numOfQuestions = parseInt(limit, 10);

  services.getQuestionsWithAnswersByDifficulty(difficultyId, numOfQuestions)
    .then((flatData) => {
      const questionsAndAnswers = flatData.reduce((acum, row) => {
        const answerData = pick(row, ['answer_id', 'answer', 'is_right_answer']);

        const isQuestionAlreadyDefined = acum.map(({ question_id: questionId }) => questionId)
          .includes(row.question_id);

        if (isQuestionAlreadyDefined) {
          const definedQuestion = acum.find(({ question_id: questionId }) => questionId === row.question_id);
          definedQuestion.answers.push(answerData);

          return acum;
        }

        const question = omit(row, ['answer_id', 'answer', 'is_right_answer']);
        question.answers = [answerData];
        acum.push(question);

        return acum;
      }, []);
      res.json({ questions: questionsAndAnswers });
    })
    .catch(next);
};
