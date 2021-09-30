const mongoose=require('mongoose')

const connectDB= require('./config/connectDB')
const PERSONS = require('./Models/PERSONS')
connectDB()

const person = new PERSONS ({
    name: 'Mohamed2',
    age:38,
    favoriteFoods:'Couscous'
})
person.save(()=>{
    try{
        console.log('user added')
    } catch(error){
        console.log(error)
    }
})



const newP=[{name:"Mohamed Youssef",age:9,favoriteFoods: ["pasta","chikken"]},
{name:"Yemen",age:4,favoriteFoods: ["pasta","chikken"]}]
     PERSONS.create(newP).then((newP)=>console.log(newP))
              .catch((err)=>console.log(err));

 






PERSONS.find((error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})
PERSONS.find({name:'Mohamed'},(error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})
PERSONS.findOne({name:'Mohamed'},(error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})
PERSONS.findById({_id:'61545da3610b112be337e3b6'},(error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})
PERSONS.findByIdAndUpdate({_id:'61545da3610b112be337e3b6'},{age:5},(error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})

PERSONS.remove({name:'Ahmed'},(error,data)=>{

    try{

        console.log(data)
    }catch(error){
        console.log(error)
    }
})



PERSONS.find({ favoriteFoods:'chikken' })
.sort({ name: 'asc' })
.limit(2)
.select('-age')
.exec(function(error, people) {
    console.log(people)
});