
module.exports =(sequelize,dataTypes)=>{
  let alias= "Product";
  
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
    description:{
      type:dataTypes.STRING(800),
      
    },
    price:{
      type:dataTypes.FLOAT(10,2),
      allowNull:false
    },
    discount:{
      type:dataTypes.string(45)
    
    },
    image:{
      type:dataTypes.STRING(105)
    },
    id_marca:{
      type:dataTypes.INTEGER(11)
    },
    id_subcategory:{
      type:dataTypes.BOOLEAN(11)
    },
    visible:{
      type:dataTypes.BOOLEAN(4)
    },
    stock:{
      type:dataTypes.INTEGER(11)
    },
    id_talle:{
      type:dataTypes.INTEGER(11)
    },
    id_colour:{
      type:dataTypes.INTEGER(11)
    }
  }
  let config ={
      tableName:"products",
      timestamps:false
  }
  
  let Product= sequelize.define(alias,cols,config)
  Product.associate=models=>{

Product.belongTo(models.subcategories,{
  as:"subcategory",
  foreignKey:"subcategories"
})


  }


  return Product;
  
  }




