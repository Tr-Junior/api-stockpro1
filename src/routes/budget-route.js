'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../contollers/budget-controller');
const authService = require('../services/auth-service');



router.post('/', authService.authorize, controller.post);
router.get('/', authService.authorize, controller.get);
router.delete('/:id', authService.isAdmin, controller.delete);
// Atualizar o nome do cliente
router.put('/update-client-name',authService.isAdmin, controller.put);
// Remover item do orçamento
router.put('/remove-item',authService.isAdmin, controller.removeItemFromBudget);
module.exports = router;