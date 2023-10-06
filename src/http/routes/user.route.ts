import { Router, IRouter } from 'express'
import { RegisterController } from '../controllers/user/register.controller'

const router: IRouter = Router()

router.post('/user/register', RegisterController)

export { router as UserRoutes }