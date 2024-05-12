require('dotenv').config(); 
const express = require('express');

const app = express();
app.use(express.json());

const userRouter = require('./routes/users');
app.use('/', userRouter);  

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


