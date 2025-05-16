const Oficina = require('../models/oficinaModel');

const criarOficina = async (req, res) => {
  try {
    const novaOficina = new Oficina(req.body);
    const salva = await novaOficina.save();
    res.status(201).json(salva);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarOficinas = async (req, res) => {
  try {
    const oficinas = await Oficina.find();
    res.status(200).json(oficinas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarOficina = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizada = await Oficina.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizada) return res.status(404).json({ error: 'Oficina não encontrada' });
    res.status(200).json(atualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarOficina = async (req, res) => {
  try {
    const { id } = req.params;
    const deletada = await Oficina.findByIdAndDelete(id);
    if (!deletada) return res.status(404).json({ error: 'Oficina não encontrada' });
    res.status(200).json({ message: 'Oficina deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarOficina,
  listarOficinas,
  atualizarOficina,
  deletarOficina,
};