const mongoose = require('mongoose');

const OficinaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  telefone: { type: String, required: true },
  email: { type: String },
  cnpj: { type: String },
  responsavel: { type: String }
});

module.exports = mongoose.model('Oficina', OficinaSchema);