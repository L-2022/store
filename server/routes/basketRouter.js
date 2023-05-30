const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
// const userController = require('../controllers/basketController')

router.get('/', userController.getBasket)

// router.post('/', deviceController.create)
// router.get('/', deviceController.getAll)
// router.get('/:id', deviceController.getOne)
// router.post('/:id', deviceController.createReview)
//// router.post('/:id', deviceController.addBasket)

module.exports = router
