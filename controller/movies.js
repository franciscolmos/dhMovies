let db = require('../database/models');
let moment = require('moment');
const { Sequelize } = require('../database/models');
const { Op } = require('sequelize');
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
                pelicula.release_date = moment(pelicula.release_date).format('MM/DD/YYYY');
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
        res.render('create',{title: 'Add Movie'})
    },
    createMovies: (req, res) => {
        db.Peliculas.create({
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date
        })
        res.redirect('/movies');

    },
    search: (req, res) => {
        db.Peliculas.findAll({
            where: {
                title : {
                    [Op.like] : '%'+req.body.search+'%'
                }
            },
            order: [
                ['title', req.body.order]
            ]
        })
        .then(peliculas => {
            res.render('search', {title: 'search', peliculas: peliculas})
        })
    },
    editForm: (req, res) => {
        db.Peliculas.findByPk(req.params.id)
        .then(movie => {
            res.render('edit', {title: 'Edit Movie', movie: movie})
        })
    },
    editMovie: (req, res) => {
        db.Peliculas.update({
            title: req.body.title,
            awards: req.body.awards,
            length: req.body.length,
            release_date: req.body.release_date
        }, {where:{
            id: req.params.id
        }})
         res.redirect('/movies')
    },
    delete: (req, res) => {
        db.Peliculas.destroy({
            where: {
                id: req.params.id
              }
        })
        res.redirect('/movies');
    }

}