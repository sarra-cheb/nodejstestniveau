const mongoose = require('mongoose');
const schema = mongoose.Schema;
const CommandeSchema = new schema({
  Prix_total_de_vente: {
    type: Number,
    required: true
  },
  Liste_des_produits: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Produit'
  }],
  Client_associé: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',

  }
}, {
  timestamps: true,
  versionkey: false
})
module.exports = mongoose.model('Commande', CommandeSchema)