
module.exports =(sequelize,DataTypes)=>{
  let alias= "Product";
  
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
    description:{
      type:DataTypes.STRING(800),
      
    },
    price:{
      type:DataTypes.FLOAT(10,2),
      allowNull:false
    },
    discount:{
      type:DataTypes.string(45)
    
    },
    image:{
      type:DataTypes.STRING(105)
    },
    id_marca:{
      type:DataTypes.INTEGER(11)
    },
    id_subcategory:{
      type:DataTypes.BOOLEAN(11)
    },
    visible:{
      type:DataTypes.BOOLEAN(4)
    },
    stock:{
      type:DataTypes.INTEGER(11)
    },
    id_talle:{
      type:DataTypes.INTEGER(11)
    },
    id_colour:{
      type:DataTypes.INTEGER(11)
    }
  }
  let config ={
      tableName:"products",
      timestamps:false
  }
  
  let Product= sequelize.define(alias,cols,config)
  Product.associate=models=>{

Product.belongTo(models.Subcategories,{
  as:"subcategories",
  foreignKey:"subcategories"
})


  }


  return Product;
  
  }







/*id:{},
name:{},
description:{},
price:{},
discount:{},
image:{},
id_marca:{},
id_subcategory:{},
visible:{},
stock:{},
id_talle:{},
id_colour:{}, */