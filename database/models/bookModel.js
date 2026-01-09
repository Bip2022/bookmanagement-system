const bookModel = (sequelize, DataTypes) => {
  const Book = sequelize.define('book', {
    bookName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bookDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })

  return Book
}

module.exports = bookModel
