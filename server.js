'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3022;
const flowerController =require('./controller/flower.controller');
mongoose.connect("mongodb://localhost:27017/FLOWERS",
 { useNewUrlParser: true  
    ,useUnifiedTopology: true 
    ,useCreateIndex:true ,
    useFindAndModify:true});
const crud= require('./controller/flower.crud.controller')


//http://localhost:3022/flower
server.get('/flower' , flowerController.getFlowerData) 

//http://localhost:3022/test
server.get('/test', (req, res) => {
    res.send("please try to do your best ")
})
//////////////////////////////////////////////CRUD///////////////////////

//http://localhost:3022/flower/favorite
server.post('/flower/favorite' , crud.createFavFlower)

//http://localhost:3022/flower/favorite
server.get('/flower/favorite' , crud.getFavFlower)



//http://localhost:3022/flower/favorite/_id
server.delete('/flower/favorite/:_id', crud.deleteFavFlower )
//http://localhost:3022/flower/favorite/_id
server.put('/flower/favorite/:_id',crud.updateFavFlower )






server.listen(PORT, () => {
    console.log(`LISTENING TO THE ${PORT}`)
})

