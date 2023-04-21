const express = require('express');
const userApiController = require('../controllers/userApiController');
const userApiRouter = express.Router();


userApiRouter.get('/', userApiController.list);

userApiRouter.get('/:id', userApiController.detail);



module.exports = userApiRouter