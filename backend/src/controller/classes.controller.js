const express = require('express');
const router = express.Router();

const classes = require('../models/classes.model');

router.get('/classes', async (req, res)=>{
    try{

        const output = await classes.find().lean().exec();
        
        return res.status(200).json(output);

    }
    catch(err){
        return res.status(500).send({massage:err.message,status:"failed"});
    }
})

// router.post('/classes', async (req, res)=>{
//     try{

//         const output = await classes.create(req.body);

//         return res.status(200).json(output);
//     }
//     catch(err){

//         return res.status(500).send({massage:err.message,status:"Failed"});

//     }
// })

module.exports = router;