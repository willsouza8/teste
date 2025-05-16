const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const exemploRoutes = require('./routes/exemploRoutes'); // Importa as rotas
const oficinaRoutes = require('./routes/oficinaRoutes');
const clienteRoutes = require('./routes/clienteRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Conexão com o MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Rotas
app.use('/api/exemplos', exemploRoutes); // Conecta as rotas de exemplo
app.use('/api/oficinas', oficinaRoutes);
app.use('/api/clientes', clienteRoutes);

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});