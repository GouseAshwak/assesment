const { getUsers } = require('./getUsers')
const { addUser } = require('./addUser')
const {listHobbiesForParticularUser} = require("./listHobbiesForParticularUser")
const {deleteUser} = require("./deleteUser")

module.exports = {addUser,getUsers,listHobbiesForParticularUser,deleteUser}
