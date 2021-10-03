module.exports =(sequelize,dataTypes)=>{
 let alias="Talles";
 let cols ={

    id:{
        type:dataTypes.INTEGER(11).UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    talle:{
        type:dataTypes.BOOLEAN(4)
    }
    }
   let config={
       tableName:"talles",
       timestamps:"false"
   }
  let Talle=sequelize.define(alias,cols,config);

  Talle.associate =models=>{

    Talle.hasMany(models.Products,{
        as:"products",
        foreignKey:"id_talle"
    })
  }
  return Talle;
}



