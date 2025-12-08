const express = require('express')
const app = require('./app.js')
const mongoose = require('mongoose')
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Connect to DATABASE
// Here to connect my mongodb server
// Firstly i created my database in mongodb compus
// then i simply add my running port no in below URL as you can see
 
const DATABASE_URL ="mongodb+srv://rohitghansela73_db_user:tedal@assignment.amrvdi4.mongodb.net/subscribers?retryWrites=true&w=majority&appName=Assignment";
;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))
