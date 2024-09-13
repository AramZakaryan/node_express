import { Request, Response } from 'express'
import { db } from '../db/db'

export const getUsersController = (req: Request, res: Response<any>) => {
  const users = db.users

  res
    .status(200)
    .json(users)
}

