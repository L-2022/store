const uuid = require('uuid')
const path = require('path');
const {Device, DeviceInfo, Reviews, UsersBasket, User} = require('../models/models')
const ApiError = require('../error/ApiError');
const {where} = require("sequelize");
class BusketController {
    async createBusket(req, res, next) {
        try {
            let {name, price, brandId, typeId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({name, price, brandId, typeId, img: fileName});

            if (info) {
                info = JSON.parse(info)
                info.forEach(i =>
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                )
            }

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }

    }

    async getBasket(req, res) {
        console.log(req.user.id)
        const {id} = req.params
        // page = page || 1
        // limit = limit || 9
        // let offset = page * limit - limit
        // let devices;
        // if (!brandId && !typeId) {
        //     devices = await Device.findAndCountAll({limit, offset})
        // }
        // if (brandId && !typeId) {
        //     devices = await Device.findAndCountAll({where:{idUser}, limit, offset})
        // }
        // if (!brandId && typeId) {
        //     devices = await Device.findAndCountAll({where:{idUser}, limit, offset})
        // }
        // if (brandId && typeId) {
        //     devices = await Device.findAndCountAll({where:{idUser}, limit, offset})
        // }

        const basket = await UsersBasket.findAndCountAll({where:{idUser: id}})
        return res.json(basket)
    }

    async getOne(req, res) {
        const {id} = req.params
        const device = await Device.findOne(
            {
                where: {id},
                include: [{model: DeviceInfo, as: 'info'},
                          {model: Reviews,  as: 'listReviews'},
                ]

            });
        return res.json(device)
    }

    async createReview (req, res, next) {
        let {deviceId, userId, review} = req.body
        const {id} = req.params
        // const {userId2} = req.user.id
        console.log(userId)
        // const usersNames = await UserInfo.findAndCountAll({where:{id: userId }})
        //
        // const ElementUsersName = usersNames.rows.map((info) => {
        //     return info.userName
        // });
        // var UserName = [...ElementUsersName].shift();
        // const DevReview = await Reviews.create({review, username: UserName, userId: id});
        const DevReview = await Reviews.create({deviceId: id,  review: review});
        return res.json(DevReview)
    }

    async addBasket (req, res, next) {
        const {userId} = req.body
        const {id} = req.params
        const AddBasket = await UsersBasket.create({basketId: userId, deviceId: id});
        return res.json(AddBasket)

    }


}

module.exports = new BusketController()
