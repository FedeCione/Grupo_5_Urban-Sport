module.exports=(sequelize,DataTypes)=>{

let alias ="Rol_User";

let cols={
    id:{
        type:DataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.BOOLEAN(4)
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