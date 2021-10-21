const { handleError } = require('../../middleware/utils')
const Hobbies = require("../../models/hobbies")
const User = require("../../models/user")

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const deleteUser = async (req, res) => {
  try {
    if(req.body.userName.length == 0)
    {
      res.status(400).send({status:400, message:"userName cannot be empty!!"})
      return;
    }

    
    const userName = req.body.userName;
 
    await Hobbies.deleteMany({userName:userName}).then(()=>{

                    // console.log(data)
                    User.findByIdAndDelete({_id:userName},{new:true})
      
                        .then((result)=>{
                                    console.log(result)
                                    res.status(200).send({ status: 200, message: "successfully user has deleted!!"})
                                  })
                        .catch(Err => {
                                    res.status(500).send({
                                                          status: 500,
                                                          message:Err.message || "Some error occurred while deleting user."
                                                        });
                                    });
      })
      .catch(Err => {
        res.status(500).send({
                              status: 500,
                              message:Err.message || "Some error occurred while deleting  hobbies for user."
                            });
        });
  } catch (error) {
    console.log(error)
    // handleError(res, error)
  }
}

module.exports = { deleteUser }
