const produit = require('../Models/Produit')

exports.getProduct = async (req, res) => {
  try {
    const produits = await produit.find()
    res.send({ message: 'list of products', produits })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.getbyIDProduct = async (req, res) => {
  try {
    const product = await produit.findById(req.params.id)
    res.send({
      message: 'the desired product', product
    })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.addProduct = async (req, res) => {
  try {
    await produit.create(req.body)
    res.send({ message: 'product added succefully' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.updateProduct = async (req, res) => {
  try {
    await produit.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'product updated' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.deleteProduct = async (req, res) => {
  try {
    await produit.findByIdAndDelete(req.params.id)
    res.send({ message: 'product deleted' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}