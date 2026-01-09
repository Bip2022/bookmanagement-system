const express = require('express')
const bookRoute = require("./routes/bookRoute")
const app = express()
const port = process.env.PORT 
require('./database/connection')
app.use(express.json())

//localhost:3000/api/books
app.use('/api/books',bookRoute)


app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})