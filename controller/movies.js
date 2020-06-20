let db = require('../database/models');
let moment = require('moment');
let sequelize = db.sequelize;

module.exports = movieController = {
    list: (req, res, next) => {
        db.Peliculas.findAll()
            .then(peliculas => {
                res.render('movies', { title: "Movies", movies: peliculas })
            })
    },
    detail: (req, res, next) => {
        db.Peliculas.findByPk(req.params.id)
            .then(pelicula => {
                res.render('movieDetail', { title: pelicula.title + " detail", movie: pelicula })
            })
    },
    news: (req, res, next) => {
        db.Peliculas.findAll({
            order: [
                ['release_date', 'DESC']
            ], limit: 5
        })
            .then(newMovies => {
                res.render('news', { title: 'New Movies', newMovies: newMovies })
            })
    },
    recommended: (req, res, next) => {
        db.Peliculas.findAll({
            order: [
                ['awards', 'DESC']
            ], limit: 5
        })
            .then(recommended => {
                res.render('recommended', { title: 'Top 5', recommendedMovies: recommended })
            })
    },
    createForm: (req, res) => {
        res.render('create')
    },
    createMovies: (req, res) => {
        db.Peliculas.create({
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date
        })
        res.redirect('/movies');

    }

}