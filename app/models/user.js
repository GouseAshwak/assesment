const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const mongoosePaginate = require('mongoose-paginate-v2')


//There are 2 different Mongo collections: User {id, name, hobbies}, Hobbies {id, passionLevel, name, year} Hobbies are not embedded in
//the User Schema. (please use Mongo refs)
const UserSchema = new mongoose.Schema(
  {
    userName: {type: String,required: true},

    HobbiesList :[{ type:ObjectId, ref:"Hobbies",required:true}]
  },
  {
    versionKey: false,
    timestamps: true
  }
)

UserSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('User', UserSchema)
