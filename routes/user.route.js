const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');
router.post('/login', (req, res) => UserController.login(req, res));
router.post('/register', (req, res) => UserController.register(req, res));
module.exports = router;