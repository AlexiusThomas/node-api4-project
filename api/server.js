const express = require('express');
const cors = require('cors');

const server = express();
server.use(express.json())
server.use(cors());

server.get('/', (req, res, next) => {
    res.send('Servers Working!')
})

module.exports = server; 
