const db = require('../models/comments.model')
const Comments = db.comments

class CommentsService {
    async create(user, postId, comment) {
        return await Comments.create({userId: user_user.id, postId, comment })
    }
}
module.exports = new CommentsService()