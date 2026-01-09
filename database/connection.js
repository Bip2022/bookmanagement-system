const {Sequelize ,DataTypes} = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)


sequelize.authenticate()
.then(()=>{
  console.log("Database connected successfully")
})
.catch((err)=>{
  console.log("Error connecting to database", +err)
})

const db={
  Sequelize,
  sequelize
}

module.exports = db