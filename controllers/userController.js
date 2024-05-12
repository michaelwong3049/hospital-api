const User = require('../models/userModel');
const mongoose = require('mongoose');

const getAllUsers = async (req,res) => {
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        console.log("Failed To Get All Users");
        res.status(400).json({error: error.message})
    }
}

const getSingleUser = async (req,res) => {
    const {id} = req.params
    try{
        const user = await User.findById(id);
        res.status(201).json(user);
    }catch(error){
        console.log("Failed To Retrieve User");
        res.status(404).json({error: error.message})
    }
}

const createUser = async (req,res) => {
    const {name, age, inCollege} = req.body;
    try{
        const user = await User.create({name, age, inCollege});
        res.status(200).json(user); //send is send whatver you want, status shows the code
    }catch(error){
        console.log("Failed To Create User")
        res.status(400).json({error: error.message})
    }
}

const updateUser = async (req,res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Such User"})
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        res.status(400).json({error: "No such user"});
    }

    res.status(200).json(user)
}

const deleteUser = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {  //checks if the user with the ID exsits?
        return res.status(404).json({error: "No Such User"})
    }

    const user = await User.findOneAndDelete({_id: id})

    if(!user){ //checks if they found the user and deleted it?  
        return res.status(400).json({error: "No such user"})
    }

    res.status(200).json(user);
}

module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser
}
