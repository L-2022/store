const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

router.post('/', deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
router.post('/:id', deviceController.createReview)
// router.post('/:id', deviceController.addBasket)
module.exports = router
