const db = require("../database/models");

module.exports = {
    list: (req, res) => {
        db.Movies.findAll().then((movies) => {
            res.render("moviesList", { movies });
        });
    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id).then((movie) => {
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
    add: (req, res) =>{
        res.render("moviesAdd");
    },
    create: (req, res) => {
        db.Movies.create({
            ...req.body,
        })
        res.redirect("/movies");
    }
};
