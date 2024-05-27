require('dotenv').config(); 
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());
const patientRouter = require('./routes/patients');
app.use('/patients', patientRouter);  

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(3000, () => {
            console.log("Connected to MongoDB & Server Listening on PORT: ", 3000);
        });
    })
    .catch(error => {
        console.log(error);
    })


