const express = require('express');
const {Getall,Addtask,UpdateTask,Getsingle,Deletetask} = require('../controllers/allrequistes')
const routes = express.Router();


routes.route('/').get(Getall).post(Addtask)
routes.route('/:id').delete(Deletetask).get(Getsingle).patch(UpdateTask)


module.exports = routes