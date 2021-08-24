'use strict';

const FlowerModel =require('../model/flower.mongoose')

const createFavFlower =async (req, res) => {

const {instructions, photo,name}=req.body
const slug = name.toLowerCase().split(' ').join('-')
FlowerModel.find({name:name}, (error,data) => {
    if(data.length > 0) {
        res.send('YOUR LOVELY FLOWER IS ALREADY HERE ')
    }else{
        const newFlowerModel = new FlowerModel ({
            name:name,
            instructions:instructions,
            photo:photo
        });
        console.log(newFlowerModel);
        newFlowerModel.save();
        res.send(newFlowerModel);
    }
})
}

const getFavFlower = async (req, res )=> {
    FlowerModel.find({} ,(error,data) => {
        res.send(data)
    });
}

const deleteFavFlower=async (req, res)=> {
    const id= req.param.id
    FlowerModel.deleteOne({_id:id} ,(error,data) => {
        if(error){
            res.send(error);
        }else{
            res.send(data);
        }
    })
}

const updateFavFlower=async (req, res)=> {
    const {instructions, photo,name}=req.body
    const id = req.params.id;
    FlowerModel.findOneAndUpdate({_id:id} ,(error,data) => {
        res.send(data);
    });
}







module.exports ={
    createFavFlower,
    getFavFlower,
    deleteFavFlower,
    updateFavFlower
}