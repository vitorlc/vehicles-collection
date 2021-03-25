const Veiculo = require('../models/veiculo')

module.exports = {
  async find(req, res) {
    try {
      const veiculo = await Veiculo.findOne({ _id: req.params.id })
      return res.status(200).send(veiculo)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar o veículo" })
    }
  },
  async findAll(req, res) {
    try {
      const veiculo = await Veiculo.find()
      return res.status(200).send(veiculo)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível encontrar os veículos" })
    }
  },
  async create(req, res) {
    try {
      const veiculo = new Veiculo(req.body)
      const saved = await veiculo.save()
      return res.status(200).send(saved)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível criar o veículo" })
    }
  },
  async update(req, res) {
    try {
      const updated = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true })
      return res.status(200).send(updated)
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível atualizar o veículo" })
    }
  },
  async remove(req, res) {
    try {
      const veiculo = await Veiculo.findOne({ _id: req.params.id })
      await veiculo.remove()
      return res.status(200).send({ message: 'Veículo Removido' })
    } catch (e) {
      console.log(e)
      return res.status(500).send({ error: true, msg: "Não foi possível remover o veículo" })
    }
  }
}