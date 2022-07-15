const db = require("../database/models");
const movies = require("../database/models/movies");

module.exports = {
    list: (req, res) => {
        db.Movies.findAll({ include: ["genre"] }).then((movies) => {
            res.render("moviesList", { movies });
        });
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id, {
            include: ["genre", "actors"],
        }).then((movie) => {
            res.render("moviesDetail", { movie });
        });
    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [["release_date", "DESC"]],
            limit: 5,
        }).then((topFive) => {
            res.render("newestMovies", {
                movies: topFive,
            });
        });
    },
    recommended: (req, res) => {
        db.Movies.findAll({
            order: [["rating", "DESC"]],
            limit: 5,
        }).then((topFive) => {
            res.render("recommendedMovies", {
                movies: topFive,
            });
        });
    },
    add: (req, res) => {
        db.Genres.findAll().then((genres) => {
            res.render("moviesAdd", { genres });
        });
    },
    create: (req, res) => {
        db.Movies.create({
            ...req.body,
        }).then(function () {
            res.redirect("/movies");
        });
    },
    edit: (req, res) => {
        Promise.all([
            db.Movies.findByPk(req.params.id, {
                include: ["genre", "actors"],
            }),
            db.Genres.findAll(),
            db.Actors.findAll(),
        ]).then(function ([movie, genres, actors]) {
            res.render("moviesEdit", { movie, genres, actors });
        });
    },
    update: (req, res) => {
        db.Movies.findByPk(req.params.id).then((movie) => {
            movie.set({
                ...req.body,
            });

            if (req.file) {
                movie.image = req.file.filename;
            }

            movie.save().then(() => {
                res.redirect("/movies/" + req.params.id);
            });
        });
    },
    destroy: (req, res) => {
        db.Movies.findByPk(req.params.id).then((movie) => {
            movie.setActors([]).then(() => {
                movie.destroy().then(() => {
                    res.redirect("/movies");
                });
            });
        });
    },

    removeActor: (req, res) => {
        db.Movies.findByPk(req.params.id).then((movie) => {
            movie.removeActor(req.params.actorId).then(() => {
                res.redirect("/movies/edit/" + req.params.id);
            });
        });
    },
    addActor: (req, res) => {
        db.Movies.findByPk(req.params.id).then((movie) => {
            movie.addActor(req.body.actorId).then(() => {
                res.redirect("/movies/edit/" + req.params.id);
            });
        });
    },
};
