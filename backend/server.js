const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_FILE = path.join(__dirname, 'tarefas.json');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir os arquivos estáticos do frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Rota para salvar nova tarefa
app.post('/api/tarefas', (req, res) => {
  const novaTarefa = {
    titulo: req.body.titulo,
    descricao: req.body.descricao,
    data: new Date().toISOString()
  };

  // Garante que o arquivo existe
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([]));
  }

  // Lê e adiciona a nova tarefa
  const tarefas = JSON.parse(fs.readFileSync(DATA_FILE));
  tarefas.push(novaTarefa);
  fs.writeFileSync(DATA_FILE, JSON.stringify(tarefas, null, 2));

  res.status(201).json({ mensagem: 'Tarefa salva com sucesso!' });
});

// Rota para listar tarefas
app.get('/api/tarefas', (req, res) => {
  if (!fs.existsSync(DATA_FILE)) {
    return res.json([]);
  }
  const tarefas = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(tarefas);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
