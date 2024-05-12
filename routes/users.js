const express = require('express');
const { getAllUsers, getSingleUser, createUser, updateUser, deleteUser} = require('../controllers/userController');
const router = express.Router(); 

router.get('/', getAllUsers)

router.get('/:id', getSingleUser)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router;