
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
    last_name:{
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
       
    },
    address:{
        type:dataTypes.STRING(100),
        
    },
    rol_id:{
        type:dataTypes.INTEGER(2).UNSIGNED,
        
        
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
       
    },
    postalcode:{
        type:dataTypes.INTEGER(11),
    }
}
let config ={
    tableName:"users",
    timestamps: false
}

let User = sequelize.define(alias,cols,config)

User.associate = models => {
    User.hasMany(models.Favorites,{
        as:"favorites",
        foreignKey:"id_user"
    })
    User.hasMany(models.Sales,{
        as:"sales",
        foreignKey:"id_user"
    })
    }
return User;
}

