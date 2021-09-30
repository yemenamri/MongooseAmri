
const mongoose=require('mongoose')
const connectDB=()=>mongoose.connect('mongodb://localhost/person',()=>{
    try{
        console.log('database is connected')
    }
    catch(error){
        console.log(error);
    }
})
module.exports=connectDB