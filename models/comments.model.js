module.exports = (sequelize, Sequelize) => {
    const Comments = sequelize.define("comments", {
        comment: {
            type: Sequelize.STRING
        }
    });

    return Comments;
};