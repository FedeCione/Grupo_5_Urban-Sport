module.exports =(sequelize,dataTypes)=>{
  let alias= "Products";
  
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
      type:dataTypes.STRING(800)
    },
    price:{
      type:dataTypes.FLOAT(10,2),
      allowNull:false
    },
    discount:{
      type:dataTypes.STRING(45),
      allowNull:false
    },
    id_subcategory:{
      type:dataTypes.INTEGER(11),
    },
    visible:{
      type:dataTypes.BOOLEAN(4),
      allowNull:false
    },
    stock:{
      type:dataTypes.INTEGER(11),
      allowNull:false
    },
  }
  let config ={
      tableName:"products",
      timestamps: false
  }
  
  let Product= sequelize.define(alias,cols,config);
  Product.associate=models=>{
    Product.belongsTo(models.Subcategories,{
      as:"subcategories",
      foreignKey:"id_subcategory",
      timestamps: false
      
    })
    Product.belongsToMany(models.Talles, {
      as: "talles",
      through: "talle_product",
      foreignKey: "id_product",
      otherKey: "id_talle",
      timestamps: false
    })
    Product.belongsToMany(models.Colours, {
      as: "colours",
      through: "colour_product",
      foreignKey: "id_product",
      otherKey: "id_colour",
      timestamps: false
    })
    Product.hasMany(models.Favorites,{
      as:"favorites",
      foreignKey:"id_product"
    })
    Product.hasMany(models.Images,{
      as:"images",
      foreignKey:"productId"
    })
    Product.belongsTo(models.Brands, {
      as:"product_brand",
      foreignKey:"id_marca"
    })
  }
  return Product;
  }




