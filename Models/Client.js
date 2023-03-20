const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ClientSchema = new schema({
  Nom: {
    type: String,
    required: true
  },
  Prenom: {
    type: String,
    required: true
  },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  MOt_de_passe: {
    type: String,
    required: true
  },
  Role: {
    type: String,
    default: 'client'
  }
}
  , {
    timestamps: true,
    versionkey: false
  })
module.exports = mongoose.model('Client', ClientSchema)