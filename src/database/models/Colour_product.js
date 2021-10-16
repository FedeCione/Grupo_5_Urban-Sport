const Colour = require("./Colour");

module.exports = (sequelize, dataTypes) => {
    let alias = "Colour_products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_colour: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "colour_product",
        timestamps: false
    }
    let Colour_product = sequelize.define(alias, cols, config)

    Colour_product.associate = models => {
        Colour_product.belongsTo(models.Products, {
            as: "pivot_products",
            foreignKey: "id_product",
            otherKey: "id_colour"
        })
        Colour_product.belongsTo(models.Colours, {
            as: "pivot_colours",
            foreignKey: "id_colour",
            otherKey: "id_product"
        })
    }

    return Colour_product;
}