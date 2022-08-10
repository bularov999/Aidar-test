const CommentsService = require('../services/comment.service');
class CommentsController {
    async create(req, res) {
        const { postId, comments } = req.body;
        try {
            const comments = await CommentsService.create(req.user, postId, comments);
            res.status(201).send(comments);
        } catch (e) {
            res.send(e);
        }
    }
}
module.exports = new CommentsController();