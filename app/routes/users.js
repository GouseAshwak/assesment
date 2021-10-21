const express = require('express')
const router = express.Router()

const trimRequest = require('trim-request')

const {
  getUsers,
  addUser,
  listHobbiesForParticularUser,
  deleteUser
} = require('../controllers/users')


/*
 * Users routes
 */

/*
 * Get items route
 */
router.get(
  '/getUsers',
  trimRequest.all,
  getUsers
)

/*
 * Create new item route
 */
router.post(
  '/addUser',
  trimRequest.all,// remove space in req.body
  addUser
)

/*
 * delete particular user route
 */
router.delete(
  '/deleteUser',
  trimRequest.all,
  deleteUser
)

/*
 * fetch hobbies for particular user route
 */
router.get(
  '/listHobbies',
  trimRequest.all,
  listHobbiesForParticularUser
)



module.exports = router
