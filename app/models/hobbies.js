const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const mongoosePaginate = require('mongoose-paginate-v2')

const hobbieSchema = new mongoose.Schema(
  {
    userName: {type:ObjectId,ref:"User",required: true},

    passionLevel:{type:String,required: true},

    name:{type:String,required: true},

    year: {type:String,required: true},

  },
  {
    versionKey: false,
    timestamps: true
  }
)

hobbieSchema.plugin(mongoosePaginate)
module.exports = mongoose.model('Hobbies', hobbieSchema)
