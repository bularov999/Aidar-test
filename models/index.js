const dbConfig = require("../config/db/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model.js")(sequelize, Sequelize);
db.post = require("./post.model.js")(sequelize, Sequelize);
db.comments = require("./comments.model.js")(sequelize, Sequelize);

db.user.hasMany(db.post, { as: 'posts' });
db.user.hasMany(db.comments, { as: 'comments' });
db.post.hasMany(db.comments, { as: 'comments' });

db.post.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
});
db.comments.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
});
db.comments.belongsTo(db.post, {
  foreignKey: 'postId',
  as: "posts"
})

module.exports = db;