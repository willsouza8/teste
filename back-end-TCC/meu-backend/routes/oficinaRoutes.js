const express = require('express');
const router = express.Router();
const oficinaController = require('../controllers/oficinaController');

router.post('/', oficinaController.criarOficina);
router.get('/', oficinaController.listarOficinas);
router.put('/:id', oficinaController.atualizarOficina);
router.delete('/:id', oficinaController.deletarOficina);

module.exports = router;