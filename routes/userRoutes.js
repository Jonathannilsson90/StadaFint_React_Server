const express = require('express')
const router = express.Router();
const controllers = require('../controllers/userControllers')


router.post('/register', controllers.registerUser)
router.delete('/delete/:userId', controllers.deleteUser)
/// Ease of access for admin
router.get('/all', controllers.getAllUsers)
router.patch('updateuser/:userId', controllers.updateUser)
module.exports = router;