const mongoose=require('mongoose')

var urlSchema=new mongoose.Schema({
    'fullUrl':{
        type:String,
        required:true
    },
    'shortUrl':{
        type:String,
        required:true
    },
    'clicks':{
        type:Number,
        default:0
    }
})
var Url=mongoose.model('Url',urlSchema)
module.exports=Url;