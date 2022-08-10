const userService = require('../services/user.service');
class UserController {
    async login(req, res) {
        try {
            const user = await userService.login(req.body.name, req.body.password);
            res.status(200).send(user);
        } catch (e) {
            res.send(e);
        }
    }
    async register(req, res) {
        try {
            const user = await userService.register(req.body.name, req.body.password);
            res.status(200).send(user);
        } catch (e) {
            res.send(e);
        }
    }
}
module.exports = new UserController();