'use strict';

const axios = require('axios')
const FlowerModel=require('../model/flower.model')
const getFlowerData = async (req, res) => {
    const url=`https://flowers-api-13.herokuapp.com/getFlowers`
    await axios.get(url)
    .then(result => {
            const response = result.data.flowerslist.map(lovely => {
                return new FlowerModel(lovely)
            })
            res.send(response)
    }).catch(err => {
        console.log(`===================================`)
        console.log(err);
        console.log(`===================================`)
    })
}
module.exports = {
    getFlowerData,
}