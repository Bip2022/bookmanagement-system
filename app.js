const express = require('express')
const { books } = require('./database/connection')
const app = express()
const port = process.env.PORT 
require('./database/connection')
app.use(express.json())

app.get('/books', async(req,res) =>{
  //logic to fetch books from database
  const datas = await books.findAll()
  res.json({
    message :"Book feteched successfully",
    data : datas
  })
})

app.post('/books', async(req, res) => {
  //logic to fetch books from database
console.log(req.body)
//console.log(bookName, bookPrice, bookAuthor, bookDescription)
const {bookName, bookPrice, bookAuthor, bookDescription} = req.body
await books.create({
  bookName,
  bookPrice,
  bookAuthor,
  bookDescription
})

  res.json({
    message: 'Book added successfully'
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