const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth.middleware');
const PostController = require('../controllers/post.controller');
router.post('/create', auth, (req, res) => PostController.create(req, res));
module.exports = router