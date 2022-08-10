const db = require('../models/index');
const Post = db.post;


class PostService {
    async create(user, { title, text }) {
        console.log(user.id, '---->>> from user')

        return await Post.create({ title, text, userId: user.user_id});
    }
}
module.exports = new PostService();