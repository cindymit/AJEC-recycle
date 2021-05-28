import { Router } from 'express'
import bikesRoutes from './bikes.js'
import userRoutes from './user.js'


const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', userRoutes)
router.use('/', bikesRoutes)

export default router
