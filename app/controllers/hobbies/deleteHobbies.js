const { handleError } = require('../../middleware/utils')
const Hobbies = require("../../models/hobbies")
const User = require("../../models/user")

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const deleteHobbies = async (req, res) => {
  try {
    if(req.body.hobbie_id.length == 0)
    {
      res.status(400).send({status:400, message:"hobbie_id cannot be empty!!"})
      return;
    }

    
    const hobbie_id = req.body.hobbie_id;
 
    await Hobbies.findByIdAndDelete({_id:hobbie_id}).then((data)=>{

                    if(data == null){
                 
                          return res.status(400).send({
                              status:400,
                              message:"Such type of hobbie doesn't exist to user."
                              })
                          }
                    // console.log(data)
                    User.findByIdAndUpdate({_id:data.userName},{$pull:{HobbiesList:hobbie_id}},{new:true})
      
                        .then((result)=>{
                                    console.log(result)
                                    res.status(200).send({ status: 200, message: "successfully hobbies has removed!!"})
                                  })
                        .catch(Err => {
                                    res.status(500).send({
                                                          status: 500,
                                                          message:Err.message || "Some error occurred while removing hobbies."
                                                        });
                                    });
      })
      .catch(Err => {
        res.status(500).send({
                              status: 500,
                              message:Err.message || "Some error occurred while removing hobbies."
                            });
        });
  } catch (error) {
    console.log(error)
    // handleError(res, error)
  }
}

module.exports = { deleteHobbies }
