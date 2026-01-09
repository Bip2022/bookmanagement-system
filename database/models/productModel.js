const productModel = (sequelize, DataTypes) => {
  return Product = sequelize.define('product', {
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })
}
module.exports = productModel