const express = require('express');
const Router = express.Router();
const flightdetailsModel = require('../Model/flightdetailsModel');

Router.get('/getflightdetails',async (req,res)=>{
    try{
        const result=await flightdetailsModel.find({})
        res.send(result)
    }
    catch(e){
        res.send('some error occured')
    }
})

module.exports = Router