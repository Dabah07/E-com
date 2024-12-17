const express = require('express')
const router = express.Router()
const Productcontroller = require('../controllers/Productcontroller')

router.get('/products', Productcontroller.getProducts)
router.post('/products', Productcontroller.addProduct)
router.get('/products/:id', Productcontroller.getProduct)
router.put('/products/:id', Productcontroller.editProduct)
router.delete('/products/:id', Productcontroller.deleteProduct)


module.exports = router