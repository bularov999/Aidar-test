const db = require('../models/index');
const Post = db.post;


class PostService {
    async create(user, { title, text }) {
        return await Post.create({ title, text, userId: user.id });
    }
}
module.exports = new PostService();