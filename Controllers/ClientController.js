const client = require('../Models/Client');

exports.getClient = async (req, res) => {
  try {
    const clients = await client.find()
    res.send({ message: 'list of Clients', clients })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.updateClient = async (req, res) => {
  try {
    await client.findByIdAndUpdate(req.params.id, req.body)
    res.send({ message: 'client updated' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}
exports.deleteClient = async (req, res) => {
  try {
    await client.findByIdAndDelete(req.params.id)
    res.send({ message: 'client deleted succefully' })
  } catch (error) {
    res.status(500).send({ message: 'error server' })
  }
}