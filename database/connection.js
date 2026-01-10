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
db.books = require('./models/bookModel')(sequelize,DataTypes)
db.users = require("./models/userModel")(sequelize,DataTypes)



sequelize.sync({alter:false}).then(()=>{
  console.log("Database and table created successfully!!")
})
module.exports = db