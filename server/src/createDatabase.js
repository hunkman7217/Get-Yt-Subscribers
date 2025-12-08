const mongoose = require('mongoose')
const subscriberModel = require('./models/subscribers')
const data = require('./data')

// Connect to DATABASE
const DATABASE_URL ="mongodb+srv://rohitghansela73_db_user:tedal@assignment.amrvdi4.mongodb.net/subscribers?retryWrites=true&w=majority&appName=Assignment";
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({})
    // console.log(connection)
    await subscriberModel.insertMany(data)
    await mongoose.disconnect();
}
refreshAll()