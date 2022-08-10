const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const CommentsController = require('../controllers/comments.controller');
router.post('/create', auth, (req, res) => CommentsController.create(req, res));
module.exports = router;