const express = require("express");
const Subscriber = require("../models/subscribers.js");
const route = express.Router();


// This is our /subscriber related api which includes:
// 1 - an Api that returns all the subscribers 
// 2 - /names Api that returns only  name, subscribedChannel  of all subscribers
// 3 - /:id which return specific subscriber based on the subscriber id's


// GET /subscribers → return all subscribers

route.get("/subscribers", async (req,res)=>{

try {
  const subscribers = await Subscriber.find();
  res.status(200).json(subscribers);

} catch (error) {
   res.status(500).json({error : error.message});
}

})


// GET /subscribers/names → return only { name, subscribedChannel } for each subscriber

route.get("/subscribers/names", async(req,res)=>{

  try {
    const subscribers = await Subscriber.find().select("name subscribedChannel")
    res.status(200).json(subscribers);
  } catch (error) {
    res.status(500).json({error : error.message})
  }

})


// GET /subscribers/:id → return one subscriber by ID

route.get("/subscribers/:id", async (req,res)=>{
try {
  const subscribers = await Subscriber.findById(req.params.id);
    
if(!subscribers){
return res.status(400).json({message: "Subscriber not found!!!"})
}

 res.status(200).json(subscribers);

} catch (error) {
    res.status(400).json({error : error.message})
  }


})


module.exports = route;