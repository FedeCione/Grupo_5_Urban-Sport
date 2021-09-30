
module.exports =(sequelize,dataTypes)=>{
let alias= "Users";

let cols={
    id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
        
    },
    name:{
       type:dataTypes.STRING(45),
       allowNull:false
    },
    surname:{
       type:dataTypes.STRING(60),
       allowNull:false
    },
    email:{
        type:dataTypes.STRING(65),
        allowNull:false
    },
    password:{
        type:dataTypes.STRING(70),
        allowNull:false
    },
    phone:{
        type:dataTypes.STRING(45),
        allowNull:false
    },
    address:{
        type:dataTypes.STRING(100),
        allowNull:false
    },
    rol_id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        allowNull:false
        
    },
    province:{
        type:dataTypes.STRING(100),
        
    },
    city:{
        type:dataTypes.STRING(45),
       
    },
    avatar:{
        type:dataTypes.STRING(100)

    },
    dni:{
        type:dataTypes.STRING(15),
        allowNull:false
    },
    postalCode:{
        type:dataTypes.INTEGER(11),
    }
}
let config ={
    tableName:"users",
    timestamps:false
}

let User = sequelize.define(alias,cols,config)

User.associate = models => {
    User.hasMany(models.Rol_User, {
        as:"user_rol",
        foreignKey:"rol_user"
    });
    }
return User;
}

