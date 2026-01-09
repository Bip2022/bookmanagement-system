const userModel = (sequelize, DataTypes) =>{
  return User = sequelize.define('user',{
    userName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    userEmail:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    userPassword:{
      type: DataTypes.STRING,
      allowNull: false
    },
  userRole:{
      type: DataTypes.STRING,
      allowNull: false,
  }
  })
}
module.exports = userModel