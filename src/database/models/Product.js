
module.exports = (sequelize, dataTypes) => {
  let alias = "Products";

  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: dataTypes.STRING(45),
      allowNull: false
    },
    description: {
      type: dataTypes.STRING(800),

    },
    price: {
      type: dataTypes.FLOAT(10, 2),
      allowNull: false
    },
    discount: {
      type: dataTypes.STRING(45)

    },
    id_image: {
      type: dataTypes.INTEGER(11)
    },
    id_marca: {
      type: dataTypes.INTEGER(11)
    },
    id_subcategory: {
      type: dataTypes.BOOLEAN(11)
    },
    visible: {
      type: dataTypes.BOOLEAN(4)
    },
    stock: {
      type: dataTypes.INTEGER(11)
    },
    id_talle: {
      type: dataTypes.INTEGER(11)
    },
    id_colour: {
      type: dataTypes.INTEGER(11)
    }
  }
  let config = {
    tableName: "products",
    timestamps: false
  }

  let Product = sequelize.define(alias, cols, config);
  Product.associate = models => {
    Product.belongsTo(models.Subcategories, {
      as: "subcategories",
      foreignKey: "id_subcategory"
    });
    Product.belongsToMany(models.Talles, {
      as: "talles",
      through: "talle_product",
      foreignKey: "id_product",
      otherKey: "id_talle",
      timestamps: false
    })
    Product.belongsTo(models.Brands, {
      as: "brand",
      foreignKey: "id_marca"
    })
    Product.belongsToMany(models.Colours, {
      as: "colours",
      through: "colour_product",
      foreignKey: "id_products",
      otherKey: "id_colours",
      timestamps: false
    })
    Product.hasMany(models.Favorites, {
      as: "favorites",
      foreignKey: "id_product"
    })
    Product.hasMany(models.Images, {
      as: "images",
      foreignKey: "productId"
    })
  }
  return Product;
}




