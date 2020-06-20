var express = require('express');
var router = express.Router();
var moviesController =  require('../controller/movies')

/* GET home page. */
router.get('/movies', moviesController.list)
router.get('/movies/detail/:id', moviesController.detail)
router.get('/movies/new', moviesController.news)
router.get('/movies/recommended', moviesController.recommended)
router.get('/movies/create', moviesController.createForm)
router.post('/movies/create', moviesController.createMovies)
router.post('/movies/search', moviesController.search)
router.get('/movies/edit/:id', moviesController.editForm)
router.put('/movies/edit/:id', moviesController.editMovie)
router.delete('/movies/delete/:id', moviesController.delete)

module.exports = router;
