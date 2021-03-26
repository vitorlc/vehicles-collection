const mongoose = require('mongoose')

const veiculoSchema = new mongoose.Schema({
  veiculo: String,
  marca: String,
  ano: Number,
  descricao: String,
  vendido: Boolean,
}, {
  timestamps: {
    createdAt: 'dt_criacao',
    updatedAt: 'dt_alteracao'
  }
})

module.exports = mongoose.model('Veiculo', veiculoSchema)