const Task = require('../models/Task')
const task  = require('../models/Task')

const getAllTasks = (req,res) =>{
    res.json(req.body)
}

const getTasks = (req,res) =>{
    res.json({id: req.params.id })
}

const deleteTasks = (req,res) =>{
    res.json({id : req.params.id , resultat : 'succes'})
}

const updateTasks = (req,res) =>{
    res.send('update singel items')
}

const addTasks = async (req,res) =>{
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json({ msg:error})
    }
}

module.exports = {
    getAllTasks,
    getTasks,
    deleteTasks,
    updateTasks,
    addTasks

}