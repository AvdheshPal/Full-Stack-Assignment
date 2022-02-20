const express = require('express');

const mongoose = require('mongoose')


const app = express()

app.use(express.json())

const connect = require('./src/config/db')

const teacher = require('./src/controller/teacher.controller')
const classes = require('./src/controller/classes.controller')

app.use('',teacher)
app.use('',classes)

app.listen(2345 , async (req,res)=>{
    await connect();
    console.log("listening port 2345")
})