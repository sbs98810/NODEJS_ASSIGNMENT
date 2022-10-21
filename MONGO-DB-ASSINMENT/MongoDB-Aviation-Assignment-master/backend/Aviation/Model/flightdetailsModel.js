const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/AviationDB')
.then((res)=>console.log('db for flight details connected'))
.catch((err)=>console.log('db error'));

const flightdetailsModel = mongoose.model('flightdetails',{
    flightNo:Number,
    cities:String,
    timming:String,
    planeCategory:String
})

module.exports = flightdetailsModel