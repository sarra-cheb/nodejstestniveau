const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProduitSchema = new schema({
  Nom: {
    type: String,
    required: true
  },
  Description: {
    type: String,
    required: true
  },
  Quantite: {
    type: Number,
    required: true
  },
  Prix_de_vente: {
    type: Number,
    required: true
  }
}
  , {
    timestamps: true,
    versionkey: false
  })
module.exports = mongoose.model('Produit', ProduitSchema)