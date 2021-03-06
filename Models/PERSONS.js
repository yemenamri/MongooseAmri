const mongoose=require('mongoose')
const schema=mongoose.Schema;
const PersonSchema= new schema({
    name: {
        type:String,
        required:true,
        unique:true
    },
    age:{
type:Number
    },
    favoriteFoods:{
type:Array
    },
    dateCreation:{
type:Date,
default:Date.now()
    }

})

module.exports= Persons= mongoose.model('person',PersonSchema)