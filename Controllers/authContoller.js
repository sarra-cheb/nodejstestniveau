const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const client = require('../Models/Client');

exports.register = async (req, res) => {

  try {
    const found = await client.findOne({ Email: req.body.Email })
    if (found) {
      res.status(400).send({ message: 'email already exist' })
    }
    else {
      const salt = bcrypt.genSaltSync(10);
      req.body.MOt_de_passe = bcrypt.hashSync(req.body.MOt_de_passe, salt);
      await client.create(req.body)
      res.status(201).send({ message: 'account created succesfully' })
    }
  } catch (error) {
    res.status(500).send({ message: 'error serveur' || error })
  }

}
exports.login = async (req, res) => {
  try {
    const found = await client.findOne({ Email: req.body.Email })

    if (found) {
      const valid = bcrypt.compareSync(req.body.MOt_de_passe, found.MOt_de_passe)
      if (valid) {
        const data = {
          clientname: found.Nom,
          clientemail: found.Email,
          clientId: found._id
        }
        const token = jwt.sign(data, 'secret', { expiresIn: '1d' });
        res.status(200).send({ message: 'connected successfully', token })
      }
      else {
        res.status(400).send({ message: 'verify password' })
      }
    }
    else {
      res.send({ message: 'verify email and password' })
    }

  } catch (error) {
    res.status(500).send({ message: 'erreur serveur' || error })
  }
}