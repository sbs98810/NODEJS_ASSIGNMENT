const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AviationDB')
.then((res)=>console.log('db for ticket booking connected'))
.catch((err)=>console.log('db error'));

const ticketbookingModel = mongoose.model('ticketbooking',{
    username:String,
    from:String,
    to:String,
    ticketbooked:Boolean
})

module.exports = ticketbookingModel