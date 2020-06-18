let db = require('../database/models')
let sequelize = db.sequelize;

module.exports = movieController = {
     list:  (req, res, next) =>  {
        db.Peliculas.findAll()
        .then(peliculas => {
            res.render('movies', {title: "Movies", movies: peliculas})
        })
    },
    detail: (req, res, next) => {
        db.Peliculas.findByPk(req.params.id)
        .then(pelicula => {
            res.render('movieDetail', {title: pelicula.title + " detail", movie: pelicula})
        })
    },
    news: (req, res, next) => {
        db.Peliculas.findAll({
            order: [
                ['release_date', 'DESC']
            ], limit: 5
        })
        .then(newMovies => {
            res.render('news', {title: 'New Movies', newMovies: newMovies})
        })
    },
    recommended: (req, res, next) => {
        db.Peliculas.findAll({
        order: [
            ['awards', 'DESC']
        ], limit: 5
    })
    .then(recommended => {
        res.render('recommended', {title: 'Top 5', recommendedMovies: recommended})
    })
    }

}