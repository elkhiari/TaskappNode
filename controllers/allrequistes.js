const task = require('../models/taskshema')

const Getall = async (req,res)=>{
    try {
        const taask = await task.find({})
        res.status(201).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const Addtask = async (req,res)=>{
    try {
        const taask = await task.create(req.body)
        res.status(201).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const Getsingle = async (req,res) =>{
    try {
        const taask = await task.findOne({name:req.params.id})
        res.status(201).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const Deletetask = async (req,res) =>{
    try {
        const taask = await task.deleteOne({name:req.params.id})
        res.status(201).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const UpdateTask = async (req,res)=>{
    try {
        const taask = await task.updateOne({name:req.params.id},req.body);
        res.status(201).json(taask)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}



module.exports = {Getall,Addtask,UpdateTask,Getsingle,Deletetask};