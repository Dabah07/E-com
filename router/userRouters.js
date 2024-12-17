const express =require('express')
const router = express.Router()
const userController =require('../controllers/userController')

router.get('/users',(req,res)=>res.json('users'))
router.post('/users',userController.registeruser)

module.exports = router