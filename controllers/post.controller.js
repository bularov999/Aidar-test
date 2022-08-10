const postService = require('../services/post.service');
class PostController {
    async create(req, res) {
        try {
            const post = await postService.create(req.user, { title: req.body.title, text: req.body.text });
            res.status(201).send(post);
        } catch (e) {
            res.send(e);
        }
    }
}

module.exports = new PostController();