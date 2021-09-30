module.exports =(sequelize,dataTypes)=>{

let alias ="subcategories";
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
    }
}
let config={
    tableName:"subcategories",
    timestamps:false
}
const Subcategory=sequelize.define(alias,cols,config)

Subcategory.associate=models =>{
    Subcategory.belongsTo(models.categories,{
     as:"category",
     foreignKey:"category_subcategories"


    })
    Subcategory.hasMany(models.Products,{
     as:"products",
     foreignKey:"subcategories"

    })
   
}
   return Subcategory;
}