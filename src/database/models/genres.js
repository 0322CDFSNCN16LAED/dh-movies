module.exports = function (sequelize, datatypes) {
    const genre = sequelize.define(
        "Genres",
        {
            name: datatypes.STRING(100),
            ranking: datatypes.INTEGER,
        },
        {
            tableName:
                "genres" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    genre.associate = (models) => {
        genre.hasMany(models.Movies, {
            foreignKey: 'genre_id',
            as: 'movies'
        });
    }
    return genre;
};
