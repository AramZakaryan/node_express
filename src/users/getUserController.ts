import { Request, Response } from 'express'
import { db } from '../db/db'
import { HTTP_STATUSES } from '../types/status.enum'

export const getUserController = (req: Request, res: Response<any>) => {
  const user = db.users.find(u => u.id === +req.params.id)
  if (!user) res.sendStatus(HTTP_STATUSES.NOT_FOUND_404)

  res
    .status(200)
    .json(user)
}