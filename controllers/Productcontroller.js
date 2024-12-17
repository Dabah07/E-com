const Product = require('../models/Product')

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}
exports.addProduct = async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.json(product)
}

exports.getProduct = async (req, res) => {
    const product = await Product.findById(req.params.id)
    res.json(product)
}

exports.editProduct = async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(product)
}

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id)
    res.json({ message: 'deleted' })
}  