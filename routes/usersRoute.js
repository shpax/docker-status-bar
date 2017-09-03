const express = require('express');

module.exports = () => {
  const router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', { title: 'Users', contentView: 'users', payload: {}});
  });

  return router
};
