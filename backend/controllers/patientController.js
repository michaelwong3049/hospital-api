const Patient = require('../models/patientModel');
const mongoose = require('mongoose');

const getAllPatients = async (req,res) => {
    try{
        const patients = await Patient.find();
        res.status(200).json(patients);
    }catch(error){
        console.log("Failed To Get All Patients");
        res.status(400).json({error: error.message})
    }
}

const getSinglePatient = async (req,res) => {
    const {id} = req.params
    try{
        const patient = await Patient.findById(id);
        res.status(201).json(patient);
    }catch(error){
        console.log("Failed To Retrieve Patient");
        res.status(404).json({error: error.message})
    }
}

const createPatient = async (req,res) => {
    const {name, age, bp, glucose, insulin, bmi} = req.body;
    try{
        const patient = await Patient.create({name, age, bp, glucose, insulin, bmi});
        res.status(200).json(patient); //send is send whatver you want, status shows the code
    }catch(error){
        console.log("Failed To Create Patient")
        res.status(400).json({error: error.message})
    }
}

const updatePatient = async (req,res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No Such Patient"})
    }

    const patient = await Patient.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!patient){
        res.status(400).json({error: "No such patient"});
    }

    res.status(200).json(patient)
}

const deletePatient = async (req,res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {  //checks if the user with the ID exsits?
        return res.status(404).json({error: "No Such Patient"})
    }

    const patient = await Patient.findOneAndDelete({_id: id})

    if(!patient){ //checks if they found the user and deleted it?  
        return res.status(400).json({error: "No such Patient"})
    }

    res.status(200).json(patient);
}

module.exports = {
    getAllPatients,
    getSinglePatient,
    createPatient,
    updatePatient,
    deletePatient
}
