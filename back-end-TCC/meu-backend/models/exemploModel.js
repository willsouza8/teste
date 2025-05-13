const mongoose = require('mongoose');

const ExemploSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
});

module.exports = mongoose.model('Exemplo', ExemploSchema);