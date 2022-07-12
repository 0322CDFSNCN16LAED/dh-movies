module.exports = function (sequelize, datatypes) {
    const model = sequelize.define(
        "Movies",
        {
            title: datatypes.STRING(500),
            rating: datatypes.DECIMAL(3, 1),
            length: datatypes.INTEGER,
            release_date: datatypes.DATE,
        },
        {
            tableName:
                "movies" /*****nombre de la tabla en la base de datos****/,
            timestamps: true /******define que tiene fijo create y update************/,
            createdAt: "created_at",
            updatedAt: "updated_at",
        }
    );
    return model;
};
