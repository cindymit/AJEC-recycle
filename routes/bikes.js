import { Router } from 'express'
import * as controllers from '../controllers/bikes.js'
import restrict from '../helpers/restrict.js'

const router = Router()


router.get('/bikes', controllers.getBikes)
router.get('/bikes/:id', controllers.getBike)
router.post('/bikes', restrict, controllers.createBike)
router.put('/bikes/:id', restrict, controllers.updateBike)
router.delete('/bikes/:id', restrict, controllers.deleteBike)

export default router