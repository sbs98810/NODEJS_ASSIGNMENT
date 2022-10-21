const express = require('express');
const Router = express.Router();
const ticketbookingModel = require('../Model/ticketbookingModel') ;

Router.post('/bookticket',(req,res)=>{
    const data = req.body;

    const ticketdata = new ticketbookingModel({
        username:data.username,
        from:data.from,
        to:data.to,
        ticketbooked:data.ticketbooked
    })

    ticketdata.save().then((result)=>res.send('sucess')).catch((error)=>res.send('error'))
})

module.exports = Router