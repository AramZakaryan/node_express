import { Router } from 'express'
import { getUsersController } from './getUsersController'
import { getUserController } from './getUserController'
import { createUserController } from './createUserController'

export const usersRouter = Router()

usersRouter.get('/', getUsersController)

usersRouter.get('/:id', getUserController)
usersRouter.post('/', createUserController)