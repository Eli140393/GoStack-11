const express = require ('express');
const cors = require ('cors');
const routes = require ('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
// Rota / Recurso

// Metodos HTTP
// GET Buscar uma informação no back-end
// POST Criar uma informação no back-end
// PUT Alterar uma informação no back-end
// Delete Deletar uma informação no back-end


//Tipos de  Parametros

// Query params: Parametros nomeados enviados na rota apos o simbolo
// // de interrogacao, filtros, paginação = const params = request.query;



// Route Params: Parametros utilizados para identificar os recursos
// =     const params = request.params;

// Request Body: Corpo da requisição ,utilizado para criar ou alterar recursos
// =     const body = request.body;

// Driver : SELECT * FROM users
// Query Bulider: table('users').select('*').where()

app.listen(3333);
