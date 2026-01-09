const express = require('express')
const { books } = require('./database/connection')
const app = express()
const port = process.env.PORT 
require('./database/connection')

app.get('/books', async(req,res) =>{
  //logic to fetch books from database
  const datas = await books.findAll()
  res.json({
    message :"Book feteched successfully",
    data : datas
  })
})

app.post('/books', (req, res) => {
  //logic to fetch books from database

  res.json({
    message: 'Book created successfully'
  })
})

app.delete('/books/:id', (req, res) => {
  res.json({
  message: 'Book deleted successfully'
  })
})

app.patch('/books/:id', (req, res) => {
res.json({
  message: 'Book updated successfully'
})
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})