const { fetchUser, createUser, fetchSingleUser, deleteUser, updateUser } = require('../controllers/userController')

const router =require('express').Router()

router.route('/').get(fetchUser).post(createUser)
router.routes('/:id').get(fetchSingleUser).delete(deleteUser).patch(updateUser)

module.exports = router