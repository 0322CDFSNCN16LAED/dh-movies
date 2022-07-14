module.exports = function (sequelize, datatypes) {
    const model = sequelize.define(
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
    return model;
};
