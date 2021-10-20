module.exports = (sequelize, dataTypes) => {
    let alias = "Talle_products";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_talle: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        id_product: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "talle_product",
        timestamps: false
    }
    let Talle_product = sequelize.define(alias, cols, config)
    Talle_product.associate = models => {
        Talle_product.belongsTo(models.Products, {
            as: "pivot_products",
            foreignKey: "id_product",
            otherKey: "id_talle"
        })
        Talle_product.belongsTo(models.Talles, {
            as: "pivot_talles",
            foreignKey: "id_talle",
            otherKey: "id_product"
        })
    }
    return Talle_product;
}

