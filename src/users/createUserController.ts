import { Request, Response } from 'express'
import { OutputErrorsType } from '../input-output-types/output-errors-type'
import { db } from '../db/db'
import { InputVideoType, Resolutions } from '../input-output-types/video-types'
import { User } from '../input-output-types/user-types'

const inputValidation = (user: User) => {
  const errors: OutputErrorsType = { // объект для сбора ошибок
    errorsMessages: []
  }

  if (!user.name) {
    errors.errorsMessages.push({
      message: 'error!!!!', field: 'title'
    })
  }
  return errors
}

export const createUserController = (req: Request<any, any, User>, res: Response<any /*OutputVideoType*/ | OutputErrorsType>) => {
  const errors = inputValidation(req.body)
  if (errors.errorsMessages.length) { // если есть ошибки - отправляем ошибки
    res
      .status(400)
      .json(errors)
    return
  }

  // если всё ок - добавляем видео
  const newUser: any /*VideoDBType*/ = {
    ...req.body,
    id: Date.now()
    // ...
  }
  db.users = [...db.users, newUser]

  res
    .status(201)
    .json(newUser)
}