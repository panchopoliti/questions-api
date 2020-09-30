
const services = require('../services');

exports.renderIndex = (req, res) => res.render('index', { title: 'Express' });

exports.renderQuestions = (req, res, next) => {
  services.getQuestions()
    .then(questions => {
      res.json({ questions });
    })
    .catch(next);
};

