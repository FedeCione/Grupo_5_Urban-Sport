module.exports = (sequelize, dataTypes) => {

    let alias = "Subcategories";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false
        },
        categories_id: {
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tableName: "subcategories",
        timestamps: false
    }
    const Subcategory = sequelize.define(alias, cols, config)

    Subcategory.associate = models => {
        Subcategory.belongsTo(models.Categories, {
            as: "category",
            foreignKey: "categories_id"
        })
        Subcategory.hasMany(models.Products, {
            as: "products",
            foreignKey: "id_subcategory"
        })
    }
    return Subcategory;
}