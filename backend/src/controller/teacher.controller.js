const express = require('express');
const router = express.Router();

const teacher = require('../models/teacher.model');

router.get('/teacher', async (req, res) => {
    try {
        const page = +req.query.page || 1;
        const size = +req.query.size || 5;
        const skip = (page - 1) * size;
        const totalPage = Math.ceil((await teacher.find().countDocuments()) / size);
        const output = await teacher.find().populate("class").skip(skip).limit(size).lean().exec();
        return res.status(200).json({ output, totalPage });
    }
    catch (err) {
        return res.status(500).json({ message: err.message, status: 'Failed' });
    }
})

// router.post('/teacher', async (req, res)=>{
//     try{
//         const output = await teacher.create(req.body)

//         return res.status(200).json(output)
//     }
//     catch(err){
//         return res.status(500).json({message:err.message, status:'Failed'});
//     }
// })
router.get('/teacherTotal', async (req, res) => {
    try {
        const output = await teacher.find().count().lean().exec()

        return res.status(200).json(output)
    }
    catch (err) {
        return res.status(500).json({ message: err.message, status: 'Failed' });
    }
})

// router.patch('/teacher/:id', async (req, res)=>{

//     try{

//         const output = await teacher.findByIdAndUpdate(req.params.id, req.body,{new:true});

//         return res.status(200).json(output);

//     }
//     catch(err){
//         return res.status(500).json({message:err.message,status:'Failed'});
//     }
// })

module.exports = router;