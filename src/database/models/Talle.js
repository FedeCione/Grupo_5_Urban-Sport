module.exports = (sequelize, dataTypes) => {
    let alias = "Talles";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        talle: {
            type: dataTypes.BOOLEAN(4)
        }
    }
    let config = {
        tableName: "talles",
        timestamps: "false"
    }
    let Talle = sequelize.define(alias, cols, config);

    Talle.associate = models => {
        Talle.belongsToMany(models.Products, {
            as: "products",
            through: "talle_product",
            foreignKey: "id_talle",
            otherKey: "id_product",
            timestamps: false
          })
    }
    return Talle;
}



