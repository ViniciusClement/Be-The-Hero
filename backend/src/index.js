//Express é um pacote
const express = require('express');
//Cors = segurança
const cors = require('cors');
//Routes é um arquivo (./)
const routes = require('./routes');

const app = express();

app.use(cors());
//Informar a aplicação que o formato do body vai ser em JSON
app.use(express.json());
app.use(routes);

app.listen(3333);

/*
* GET: Busca uma informação do back-end
* POST: Cadastra uma informação do back-end
* PUT: Altera uma informação do back-end
* DELETE: Deleta uma informação do back-end
*/

/*
Tipos de parâmetros:
  -Query Parms: parâmetros nomeados enviados na rota com "?" (filtros, paginação)
  -Route Parms: parãmetros utilizados para identificar recursos (id_user)
  -Request Body: corpo da requisição p/ criar ou modificar recursos
*/
