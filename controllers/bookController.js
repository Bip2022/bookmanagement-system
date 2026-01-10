const { books } = require("../database/connection")

const fetchBooks = async(req,res) =>{
  //logic to fetch books from database
  try{
    const datas = await books.findAll()
  res.status(200).json({
    message :"Book feteched successfully",
    data : datas
  })
}catch(err){
  res.status(500).json({
    message: "Error fetching books",
    error: err.message
  })
}
  }
  

const addBooks =  async(req, res) => {
  //logic to fetch books from database
  try{
    console.log(req.body)
//console.log(bookName, bookPrice, bookAuthor, bookDescription)
const {bookName, bookPrice, bookAuthor, bookDescription} = req.body
await books.create({
  bookName,
  bookPrice,
  bookAuthor,
  bookDescription
})
  res.status(201).json({
    message: 'Book added successfully'
  })
}catch (err){
    res.status(500).json({
      message: "Error adding book",
      error: err.message
    })
}
  }


const deleteBooks =  async (req, res) => {
  try{
  const id = req.params.id
  await books.destroy({
    where:{
    id:id
    }
  })
  res.status(202).json({
  message: 'Book deleted successfully'
  })
}catch(err){
  res.status(500).json({
    message: "Error deleting book",
    error: err.message
  })
}
  }


const updateBooks =  async(req, res) => {
  try{
const id = req.params.id
  const {bookName, bookPrice, bookAuthor, bookDescription} = req.body
  await books.update({
    bookName,
    bookPrice,
    bookAuthor,
    bookDescription
  },{
    where:{
    id:id
    }
  })
res.status(203).json({
  message: 'Book updated successfully'
})
}catch(err){
    res.status(500).json({
      message: "Error updating book",
      error: err.message
    })
}
  }
  

const singleFetchBook = async (req, res) => {
  try{
  const id = req.params.id
  const datas = await books.findByPk(id)//always return object
  //const datas = await books.findAll({where:{id:id}})//always return array
  res.staus(200).json({
    message: 'Single book fetched successfully',
    data: datas
  })
} catch(err){
    res.status(500).json({
      message: "Error fetching single book",
      error: err.message
    })
}
  }



module.exports ={fetchBooks, addBooks, deleteBooks, updateBooks, singleFetchBook}