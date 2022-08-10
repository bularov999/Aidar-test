const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const db = require('./models');
const userRouter = require('./routes/user.route')
const postRouter = require('./routes/post.route')
const commentsRouter = require('./routes/comments.route')
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/health-check', (req, res) => {res.status(200).send('Hello')})
app.use('/user', userRouter)
app.use('/post', postRouter)
app.use('/comments', commentsRouter)
start();
async function start() {
    try {
        db.sequelize.sync()
            .then(() => {
                console.log("Synced db.");
            })
            .catch((err) => {
                console.log("Failed to sync db: " + err);
            });


        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`);
        });
    } catch (e) {
        throw new Error(e);
    }
}

