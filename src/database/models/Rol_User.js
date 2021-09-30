module.exports=(sequelize,dataTypes)=>{

let alias ="Rol_User";

let cols={
    id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:dataTypes.BOOLEAN(4)
    }
}
let config={
    tableName:"rol_user",
    timestamps:false
}
let Rol_User = sequelize.define(alias,cols,config)

/*Rol_User.associate =models=>{

Rol_User.belongsTo(models.users,{

    as:"users",
    foreignKey:
})


}*/

return Rol_User;
}