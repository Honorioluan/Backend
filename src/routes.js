const express = require('express');
const UserController = require('../controller/User')
const ClinicaController = require('../controller/Clinica')

const routes = express.Router();

//GET ==> Usado somente para buscar informação (no maximo, mandar alguma query) -- Select
//POST ==> Usando para enviar dados de formularios.. (caracter, blob) --- CRAETE
//PUT ==> Usado apra atualização -- recebe parametro tanto query, post -- UPDATE
//DELETE ==> Usado para exclusão.... parametro sao via query --- Delete

routes.get('/', (req, res) => {
  return res.json({message : "pagina principal"})
}); 

routes.get('/user',UserController.index)
routes.post('/user',UserController.store)
routes.put('/user',UserController.update)
routes.delete('/user',UserController.delete)

routes.get('/clinica',ClinicaController.index)
routes.post('/clinica',ClinicaController.store)
routes.put('/clinica',ClinicaController.update)
routes.delete('/clinica',ClinicaController.delete)

//routes.get('/cep',CidadeController)

//#Exercisio... 
//Criar Rotar para Clientes e Pedidos

module.exports = routes;
