const express = require('express');

module.exports = () => {
  const router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res, next) {
    res.render('index', { title: 'Dashboard' });
  });

  return router;
};
