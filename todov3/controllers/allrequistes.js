const task = require('../models/taskshema')

const Getall = async (req,res)=>{
    try {
        const taask = await task.find({})
        res.status(200).json({taask})
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
        const taask = await task.findOne({_id:req.params.id})
        if (!taask) return res.status(201).json({msg:`no task with id : ${req.params.id}`})
        res.status(200).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const Deletetask = async (req,res) =>{
    try {
        const taask = await task.findOneAndDelete({_id:req.params.id})
        if (!taask) return res.status(404).json({msg:`no task with id : ${req.params.id}`})
        res.status(201).json({taask})
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const UpdateTask = async (req,res)=>{
    try {
        const taask = await task.findOneAndUpdate({_id:req.params.id},req.body,{
            new:1,runValidators:1
        });
        if (!taask) return res.status(404).json({msg:`no task with id : ${req.params.id}`})
        res.status(201).json(taask)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}



module.exports = {Getall,Addtask,UpdateTask,Getsingle,Deletetask};