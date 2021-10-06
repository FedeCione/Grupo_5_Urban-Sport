module.exports = (sequelize, dataTypes) => {

  let alias = "Colours"
  let cols = {
    id: {
      type: dataTypes.INTEGER(11).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false
    }
  }
  let config = {
    tableName: "colours",
    timestamps: false
  }
  let Colour = sequelize.define(alias, cols, config)

  Colour.associate = models => {
    Colour.belongsToMany(models.Products, {
      as: "products",
      through: "colour_product",
      foreignKey: "id_colours",
      otherKey: "id_products",
      timestamps: false
    })
  }
  return Colour;
}