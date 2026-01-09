const { books } = require("../database/connection")

 const fetchBooks = async(req,res) =>{
  //logic to fetch books from database
  const datas = await books.findAll()
  res.json({
    message :"Book feteched successfully",
    data : datas
  })
}

const addBooks =  async(req, res) => {
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
}

const deleteBooks =  (req, res) => {
  res.json({
  message: 'Book deleted successfully'
  })
}

const updateBooks =   (req, res) => {
res.json({
  message: 'Book updated successfully'
})
}

const singleFetchBook = async (req, res) => {
  const id = req.params.id
  const datas = await books.findByPk(id)//always return object
  //const datas = await books.findAll({where:{id:id}})//always return array
  res.json({
    message: 'Single book fetched successfully',
    data: datas
  })
} 


module.exports ={fetchBooks, addBooks, deleteBooks, updateBooks, singleFetchBook}