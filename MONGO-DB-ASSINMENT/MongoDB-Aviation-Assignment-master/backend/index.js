const express = require('express');
const bodyparser = require('body-parser');

const server = express();

server.use(bodyparser.json());
const port = process.env.PORT || 5000;

const getdetails = require('./Aviation/FlightDetails/getFlightDetails');
server.use('/',getdetails);
const adddetails = require('./Aviation/FlightDetails/addFlightDetails');
server.use('/',adddetails);

const bookticket = require('./Aviation/TicketBooking/bookticket');
server.use('/user',bookticket)

server.listen(port, () => {
    console.log(`Server running on port ${port}`)
});