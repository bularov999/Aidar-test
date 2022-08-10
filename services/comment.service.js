const db = require('../models/index')
const Comments = db.comments

class CommentsService {
    async create(user, postId, comment) {
        return await Comments.create({userId: user.user_id, postId, comment })
    }
}
module.exports = new CommentsService()