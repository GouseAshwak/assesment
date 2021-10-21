const User = require('../../models/user')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const listHobbiesForParticularUser = async (req, res) => {
  try {

    const userName = req.body.userName;
    await User.find({_id:userName})
              .populate("HobbiesList","passionLevel name year")
                .then((data)=>{
                                res.status(200).send({ status: 200, message: "successfully fetch list Hobbies for Particular user!!",data})
                                })
                .catch(Err => {
                                res.status(500).send({
                                                    status: 500,
                                                    message:Err.message || "Some error occurred while fetching list Hobbies for Particular user!!"
                                                    });
                                });
  } catch (error) {
    console.log(error)
    handleError(res, error)
  }
}

module.exports = { listHobbiesForParticularUser }
