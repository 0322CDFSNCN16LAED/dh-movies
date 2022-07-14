module.exports = function (sequelize, datatypes) {
    const actor = sequelize.define(
        "Actors",
        {
            rating: datatypes.FLOAT,
            first_name: datatypes.STRING,
            last_name: datatypes.STRING,
        },
        {
            tableName:
                "actors" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    actor.associate = (models) => {
        actor.belongsToMany(models.Movies, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false
        });
        actor.belongsTo(models.Movies, {
            as: 'favMovie',
            foreignKey: 'favorite_movie_id'
        })
    }
    return actor;
};
