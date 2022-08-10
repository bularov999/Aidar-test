const db = require("../models/index");
const User = db.user;
const Op = db.Sequelize.Op;
const jwt = require('jsonwebtoken');
const AppError = require('../utils/apiError/apiError');
class UserService {
    async login(name, password) {
        if (!name || !password) throw new Error('user login or password is required');
        const candidate = await User.findOne({ where: { name } });
        if (!candidate) {
            throw new AppError(404, 'user not found');
        };

        if (candidate.password !== password) throw new Error('password is not correct');
        const token = jwt.sign(
            { user_id: candidate.id, name: candidate.name },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        return { candidate, token };
    }
    async register(name, password) {
        if (!name || !password) throw Error('user login or password is required');
        const candidate = await User.findOne({ where: { name } });
        if (candidate) {
            throw new Error('user is already exist');
        } else {
            const newUser = await User.create({ name, password });
            const token = jwt.sign(
                { user_id: newUser.id, name: newUser.name },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            return { candidate: newUser, token };
        }
    }
}

module.exports = new UserService();