const routes = require('express').Router();
const OperationController = require('../src/controllers/OperationController');

routes.get('/', OperationController.Operation)

module.exports = routes;