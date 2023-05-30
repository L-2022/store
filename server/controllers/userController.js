const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, UserInfo, Basket, UsersBasket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

const userID = 0
class UserController {
    async registration(req, res, next) {
        const {email, password, role, userName} = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некоректний email або password'))
        }
        const candidate = await User.findOne({where: {email}})
        if (candidate) {
            return next(ApiError.badRequest('Користувач з таким email вже зареєстрований!'))
        }
        const hashPassword = await bcrypt.hash(password, 7)

        const user = await User.create({email, role, password: hashPassword})
        const userInfo = await UserInfo.create({userName})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})

    }


    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user) {
            return next(ApiError.internal('Користувач відсутній'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Помилковий пароль'))
        }

        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }

    async check(req, res) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
    async getBasket(req, res) {
        const {idUser} = req.body
        let basket = await UsersBasket.findAndCountAll({where:{idUser: idUser}}) //id
        return res.json(basket)
    }


}

module.exports = new UserController()
