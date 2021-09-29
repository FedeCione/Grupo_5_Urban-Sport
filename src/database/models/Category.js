
module.exports =(sequelize,DataTypes)=>{
    let alias= "Category";
    
    let cols={
       
        id:{
            type:DataTypes.INTEGER(11).unsigned,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false

        },
    name:{
        type:DataTypes.STRING(45),
        allowNull:false
    },
    visible:{
        type:DataTypes.BOOLEAN(4),
        allowNull:false
    },
    description:{
        type:DataTypes.STRING(255),
        allowNull:false
    },
    id_subcategory:{
        type:DataTypes.INTEGER(11),
        allowNull:false
    }
    }
    let config ={
        tableName:"categories",
        timestamps:false
    }
    
    let Category= sequelize.define(alias,cols,config)
   

    Category.associate =models=>{

        Category.hasMany(models.Subcategories,{
            as:"subcategories",
            foreignKey:"category_subcategories"
        })

    }
   
   
   
    return Category;
    
    }