const express = require('express');
const router = express.Router();
const taskController = require('../controllers/TaskController');
const Auth =require('../middleware/auth')//secure routes usinbg this middleware 
//router.use(Auth);
/* when i commented this line and tghe one before i can test the 
routes using postmman and when it s incommented like so i get a 401 status cpde */
router.post('/', taskController.createTask);
router.put('/:id/etat', taskController.updateTask);
router.get('/', taskController.getTasks);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
