const Commande = require('../Models/Commande')
const product = require('../Models/Produit')
const client = require('../Models/Client')

exports.listofCommands = async (req, res) => {
  try {
    const Commandes = await Commande.find()
    res.send({ message: 'list of Commandes', Commandes })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.detailsCommande = async (req, res) => {
  try {
    const order = await Commande.findById(req.params.id).populate('Liste_des_produits')
    res.send({
      message: 'your order wanted ', order
    })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.addCommande = async (req, res) => {
  try {
    const found = await product.findById(req.params.productid)
    const found2 = await client.find(req.params.clientid)
    if (found.Quantite > 0) {
      req.body.Client_associé = found2.Nom
      await Commande.create(req.body, { $inc: { Prix_total_de_vente: +found.Prix_de_vente }, $push: { Liste_des_produits: req.params.productid } })
      res.send({ message: 'order added succefully' })
    } else {
      res.send({ message: 'product is unvailable' })
    }
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}