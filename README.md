# Tarefas API 1

Um projeto simples de lista de tarefas (To-Do List) com frontend em HTML/CSS/JavaScript e backend em Node.js + Express, salvando as tarefas em um arquivo JSON.

## Funcionalidades

- Adicionar tarefas com título e descrição
- Listar tarefas cadastradas
- Persistência dos dados em `backend/tarefas.json`

## Estrutura do Projeto

## Como rodar o projeto

### 1. Instale as dependências

Abra o terminal na pasta `backend` e execute:

```bash
npm install
```

### 2. Inicie o servidor
   Ainda na pasta backend, execute:

node [server.js](http://_vscodecontentref_/7)

O servidor irá rodar em http://localhost:3000.

3. Acesse o frontend
   Abra o navegador e acesse:

http://localhost:3000

Você verá o formulário para adicionar tarefas e a lista de tarefas cadastradas.

Observações:

As tarefas são salvas no arquivo backend/tarefas.json.
O frontend consome a API REST do backend para listar e cadastrar tarefas.
O backend serve os arquivos estáticos do frontend automaticamente.

Tecnologias utilizadas:

Node.js
Express
HTML5, CSS3, JavaScript
Desenvolvido para fins de estudo e prática de API REST com persistência em arquivo.
