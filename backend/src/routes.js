/*
Métodos http

get: usado para buscar informações(listar, buscar um usuario...).
post: usado para criar uma informação(criar um usuario).
put: usado para editar uma informação.
delete: usado para deletar uma informação.

tipos de parâmetros

Query Params: usados no metodo get, visiveis na url. request.query(filtros, ordenação, paginação ...).
Route Params: usados nos metodos put e delete, request.params(identificar um recurso na alteração ou remoção)
Body: usados no post e put, corpo da informação (envio de informações),request.body(Dados para criação ou alteração de um registro)0
*/


const { Router } = require('express');
const DevController = require('./controller/DevController');
const SearchController = require('./controller/SearchController'); 

const routes = Router();

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);

routes.get('/search', SearchController.index);

module.exports = routes;