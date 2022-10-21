const express = require('express');
const Router = express.Router();
const flightdetailsModel = require('../Model/flightdetailsModel');

Router.post('/addflightdetails',(req,res)=>{
    const data = req.body

    const userdata = new flightdetailsModel({
        flightNo:data.flightNo,
        cities:data.cities,
        timming:data.timmings,
        planeCategory:data.planeCategory
    })

    userdata.save().then((result)=>res.send('sucess')).catch((error)=>res.send('error'))
})

module.exports = Router