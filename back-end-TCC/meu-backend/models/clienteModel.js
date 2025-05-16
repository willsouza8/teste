const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String },
  email: { type: String },
  veiculo: { type: String },
  placa: { type: String },
  oficina: { type: mongoose.Schema.Types.ObjectId, ref: 'Oficina', required: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);