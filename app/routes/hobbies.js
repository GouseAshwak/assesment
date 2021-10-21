const express = require('express')
const router = express.Router()

const trimRequest = require('trim-request')

const{addHobbies,deleteHobbies} = require('../controllers/hobbies')

/*
 * addHobbies route
 */
router.post(
  '/addHobbies',
  trimRequest.all,
  addHobbies
)

/*
 * delete hobbies route
 */
router.delete(
  '/deleteHobbies',
  trimRequest.all,
  deleteHobbies
)


 


module.exports = router
