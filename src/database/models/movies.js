module.exports = function (sequelize, datatypes) {
    const movie = sequelize.define(
        "Movies",
        {
            title: datatypes.STRING(500),
            rating: datatypes.DECIMAL(3, 1),
            length: datatypes.INTEGER,
            release_date: datatypes.DATE,
            awards: datatypes.INTEGER,
        },
        {
            tableName:
                "movies" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    
    movie.associate = (models) => {
        movie.belongsTo(models.Genres, {
            foreignKey: 'genre_id',
            as: 'genre'
        });
        movie.belongsToMany(models.Actors, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        });
    }

    return movie;
};
