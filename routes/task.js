const express = require('express');
const router = express.Router();

const {getAllTasks,deleteTasks,updateTasks,getTasks,addTasks} = require('../countroller/tasks')

// Routes
router.route('/').get((req,res)=>{
    getAllTasks(req,res)
})

router.route('/').get(getAllTasks).post(addTasks)
router.route('/:id').get(getTasks).delete(deleteTasks).patch(updateTasks)


module.exports = router