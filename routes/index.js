var express = require('express');
var router = express.Router();
var moviesController =  require('../controller/movies')

/* GET home page. */
router.get('/movies', moviesController.list)
router.get('/movies/detail/:id', moviesController.detail)
router.get('/movies/new', moviesController.news)
router.get('/movies/recommended', moviesController.recommended)
router.get('/movies/create', moviesController.createForm)
router.post('/movies/create/:id', moviesController.createMovies)


module.exports = router;
