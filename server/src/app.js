
const express = require('express');
const app = express();


// Your code goes here
// In app.js we import our  subscriber route using ES5 method
const subscriberRoutes = require("./routes/subscriberRoutes");
app.use("/",subscriberRoutes);
















module.exports = app;
