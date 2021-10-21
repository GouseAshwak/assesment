const { handleError } = require('../../middleware/utils')
const User = require("../../models/user")

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const addUser = async (req, res) => {
  try {
    if(req.body.userName.length == 0)
    {
      res.status(400).send({status:400, message:"userName cannot be empty!!"})
      return;
    }
    const userName = req.body.userName;
    await User.create({userName})
              .then((data)=>{
                              res.status(200).send({ status: 200, message: "successfully userName has added!!",data})
                            })
               .catch(Err => {
                              res.status(500).send({
                                                    status: 500,
                                                    message:Err.message || "Some error occurred while adding userDetails."
                                                  });
                              });

  } catch (error) {
    console.log(error)
    handleError(res, error)
  }
}

module.exports = { addUser }
