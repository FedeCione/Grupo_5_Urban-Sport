module.exports = (sequelize, dataTypes) => {
    let alias = "Brands";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(55)
        }

    }
    let config = {
        tableName: "brand",
        timestamps: false
    }
    let Brand = sequelize.define(alias, cols, config)

    Brand.associate = models => {
        Brand.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_marca"
        })
    }

    return Brand;
}