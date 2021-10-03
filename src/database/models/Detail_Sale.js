module.exports=(sequelize,dataTypes)=>{

 let alias="Details_Sales";
 let cols={

    id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        allowNull:false
    },
    id_sale:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        allowNull:false
    },
    id_product:{
       type:dataTypes.INTEGER(11).UNSIGNED,
       allowNull:false

    },
    quantity:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        allowNull:false
    },
    price:{
      type:dataTypes.DECIMAL(10,2),
      allowNull:false
    },
    discount:{
       type:dataTypes.DECIMAL(10,2),
       allowNull:false
    }
 }
  let config={
      tableName:"detail_sales",
      timestamps:false
  }

 let Detail_Sale=sequelize.define(alias,cols,config)

 Detail_Sale.associate =models=>{

Detail_Sale.belongsTo(models.Products,{
    as:"products",
    foreignKey:"id_product"
})
Detail_Sale.hasMany(models.Sales,{
    as:"sales",
    foreignKey:"id_detail_sale"
})
 }
return Detail_Sale;
}