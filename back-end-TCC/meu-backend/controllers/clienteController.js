const Cliente = require('../models/clienteModel');

const criarCliente = async (req, res) => {
  try {
    const novoCliente = new Cliente(req.body);
    const salvo = await novoCliente.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find().populate('oficina');
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Cliente.findByIdAndDelete(id);
    if (!deletado) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarCliente,
  listarClientes,
  atualizarCliente,
  deletarCliente,
};