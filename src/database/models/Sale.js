module.exports = (sequelize, dataTypes) => {

    let alias = "Sales";
    let cols = {
        id: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            primaryKey: true,
            allowNull: false
        },
        id_detail_sale: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        id_user: {
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        factura: {
            type: dataTypes.STRING(30)
        },
        final_price: {
            type: dataTypes.BOOLEAN(4),
            allowNull: false
        },
        date_sale: {
            type: dataTypes.DATE,
            allowNull: false

        }
    }
    let config = {
        tableName: "sales",
        timestamps: false
    }

    let Sale = sequelize.define(alias, cols, config)

    Sale.associate = models => {

        Sale.belongsTo(models.Users, {
            as: "users",
            foreignKey: "id_user"
        })
        Sale.belongsTo(models.Details_Sales, {
            as: "detail_sales",
            foreignKey: "id_detail_sale"
        })
    }
    return Sale;
}