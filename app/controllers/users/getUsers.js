const User = require('../../models/user')
const { handleError } = require('../../middleware/utils')

/**
 * Get items function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getUsers = async (req, res) => {
  try {
    await User.find({})
              .populate("HobbiesList","passionLevel name year")
              .then((data)=>{
                             res.status(200).send({ status: 200, message: "successfully fetch all users!!",data})
                            })
             .catch(Err => {
                            res.status(500).send({
                                                  status: 500,
                                                  message:Err.message || "Some error occurred while fetching users Details."
                                                });
                            });
                        
    // const agg = [
    //   {
    //     '$lookup': {
    //       'from': 'hobbies', 
    //       'localField': '_id', 
    //       'foreignField': 'userName', 
    //       'as': 'hobbiesList'
    //     }
    //   }
    // ];

    // await User.aggregate(agg)
    //           .then((data)=>{
    //                           res.status(200).send({ status: 200, message: "successfully fetch all users!!",data})
    //                         })
    //            .catch(Err => {
    //                           res.status(500).send({
    //                                                 status: 500,
    //                                                 message:Err.message || "Some error occurred while fetching users Details."
    //                                               });
    //                           });
  } catch (error) {
    console.log(error)
    handleError(res, error)
  }
}

module.exports = { getUsers }
