var express = require('express');
var router = express.Router();

let Game = require('../models/game');

/* GET home page. */
router.get('/', function(req, res, next) {
  let games = Game.find({});
  games.exec((err, games) => {
  	res.render('index', { title: 'Express2', games: games });
  });
});

module.exports = router;
