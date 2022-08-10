const CommentsService = require('../services/comment.service');
class CommentsController {
    async create(req, res) {
        const { postId, comment } = req.body;
        try {
            const comments = await CommentsService.create(req.user, postId, comment);
            res.status(201).send(comments);
        } catch (e) {
            res.send(e);
        }
    }
}
module.exports = new CommentsController();