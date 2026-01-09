const { fetchBooks, addBooks, deleteBooks, updateBooks, singleFetchBook } = require('../controllers/bookController')

const router = require('express').Router()

router.route("/").get(fetchBooks).post(addBooks)
router.route("/:id").delete(deleteBooks).patch(updateBooks).get(singleFetchBook)

// router.get('/books',fetchBooks)
// router.post('/books',addBooks)
// router.delete('/books/:id',deleteBooks)
// router.patch('/books/:id',updateBooks)

module.exports = router






