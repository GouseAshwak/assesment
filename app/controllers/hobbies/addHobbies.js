const { handleError } = require('../../middleware/utils')
const Hobbies = require("../../models/hobbies")
const User = require("../../models/user")

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */

const addHobbies = async (req, res) => {
  try {
    if(req.body.userName.length == 0)
    {
      res.status(400).send({status:400, message:"userName cannot be empty!!"})
      return;
    }

    if(req.body.passionLevel.length == 0)
    {
      res.status(400).send({status:400, message:"passionLevel cannot be empty!!"})
      return;
    }

    if(req.body.name.length == 0)
    {
      res.status(400).send({status:400, message:"name cannot be empty!!"})
      return;
    }

    if(req.body.year.length == 0)
    {
      res.status(400).send({status:400, message:"year cannot be empty!!"})
      return;
    }

    const userName = req.body.userName;
    const passionLevel = req.body.passionLevel;
    const name = req.body.name;
    const year = req.body.year;
    // await Hobbies.create({
    //                       userName,
    //                       passionLevel,
    //                       name,
    //                       year,
    //                       })
    //           .then((data)=>{
    //                           res.status(200).send({ status: 200, message: "successfully hobbies has added!!",data})
    //                         })
    //            .catch(Err => {
    //                           res.status(500).send({
    //                                                 status: 500,
    //                                                 message:Err.message || "Some error occurred while adding hobbies."
    //                                               });
    //                           });

    await Hobbies.create({userName,passionLevel,name,year},

      (Err,data)=>{if(Err){ 
                 
              return res.status(400).send(
                  {
                  status:400,
                  message:Err.message || "Some error occurred while addding hobbies to users."
                  }
                  )}
      
                 User.findByIdAndUpdate({_id:userName},{$push:{HobbiesList:data._id}},{new:true})
      
                    .then(()=>{
                                    res.status(200).send({ status: 200, message: "successfully hobbies has added!!",data})
                                  })
                     .catch(Err => {
                                    res.status(500).send({
                                                          status: 500,
                                                          message:Err.message || "Some error occurred while adding hobbies."
                                                        });
                                    });
      })

  } catch (error) {
    console.log(error)
    handleError(res, error)
  }
}

module.exports = { addHobbies }
