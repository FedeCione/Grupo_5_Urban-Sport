
module.exports =(sequelize,DataTypes)=>{
let alias= "User";

let cols={
    id:{
        type:DataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
        
    },
    name:{
       type:DataTypes.STRING(45),
       allowNull:false
    },
    surname:{
    type:DataTypes.STRING(60),
    allowNull:false
    },
    email:{
        type:DataTypes.STRING(65),
        allowNull:false
    },
    password:{
        type:DataTypes.STRING(70),
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING(45),
        allowNull:false
    },
    address:{
        type:DataTypes.STRING(100),
        allowNull:false
    },
    rol_id:{
        type:DataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        allowNull:false
        
    },
    province:{
        type:DataTypes.STRING(100),
        
    },
    city:{
        type:DataTypes.STRING(45),
       
    },
    avatar:{
        type:DataTypes.STRING(100)

    },
    dni:{
        type:DataTypes.STRING(15),
        allowNull:false
    },
    postalCode:{
        type:DataTypes.INTEGER(11),
       
    }
}
let config ={
    tableName:"users",
    timestamps:false
}

let User = sequelize.define(alias,cols,config)

User.associate =models=>{

    User.hasMany(models.Rol_User,{
    
        as:"user_rol",
        foreignKey:"user_rol"
    })
    
    
    }


return User;

}

