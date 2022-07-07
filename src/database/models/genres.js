module.exports= function(sequelize, datatypes){
    const model=sequelize.define("Genres",{
       id: datatypes.INTEGER,
       name: datatypes.STRING(100),
       ranking: datatypes.INTEGER               
    },{
       tableName: "genres", /*****nombre de la tabla en la base de datos****/
       timestamps: true, /******define que tiene fijo create y update************/ 
       createdAt: "created_at",
       updatedAt: "updated_at"
   });
   return model;
}