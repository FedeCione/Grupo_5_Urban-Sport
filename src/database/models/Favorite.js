module.exports=(sequelize,dataTypes)=>{

let alias ="Favorites";
let cols={
    id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        allowNull:false
    },
    id_product:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        allowNull:false
    },
    id_user:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        allowNull:false
    }
 
}
let config={
    tableName:"favorites",
    timestamps:false
}

let Favorite = sequelize.define(alias,cols,config)

Favorite.associate=models=>{

    Favorite.belongsTo(models.Products,{
        as:"products",
        foreignKey:"id_product"
    })

    Favorite.belongsTo(models.Users,{
        as:"users",
        foreignKey:"id_user"
    })
}
return Favorite;
}