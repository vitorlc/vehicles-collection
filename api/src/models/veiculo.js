const mongoose = require('mongoose')

const veiculoSchema = new mongoose.Schema({
  nome: String,
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