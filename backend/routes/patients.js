const express = require('express');
const { getAllPatients, getSinglePatient, createPatient, updatePatient, deletePatient} = require('../controllers/patientController');
const router = express.Router(); 

router.get('/', getAllPatients)

router.get('/:id', getSinglePatient)

router.post('/', createPatient)

router.put('/:id', updatePatient)

router.delete('/:id', deletePatient)

module.exports = router;