import { SETTINGS } from '../src/settings'
import { app } from '../src/app'
import { agent } from 'supertest'
import { setDB } from '../src/db/db'
import { dataset1 } from './datasets'
import { User } from '../src/input-output-types/user-types'
import * as net from 'node:net'

export const req = agent(app)

describe('tests for  /users', () => {
  // beforeAll(async () => { // очистка базы данных перед началом тестирования
  //     setDB()
  // })

  it('should get empty array', async () => {

    setDB() // очистка базы данных если нужно

    const res = await req
      .get(SETTINGS.PATH.USERS)
      .expect(200) // проверяем наличие эндпоинта

    // console.log(res.body) // можно посмотреть ответ эндпоинта

    expect(res.body.length).toBe(0) // проверяем ответ эндпоинта
  })
  it('should get not empty array', async () => {
    setDB(dataset1) // заполнение базы данных начальными данными если нужно

    const res = await req
      .get(SETTINGS.PATH.USERS)
      .expect(200)

    // console.log(res.body)

    expect(res.body.length).toBe(5)
    expect(res.body[0]).toEqual(dataset1.users[0])
  })
  it('should get an entity', async () => {
    setDB(dataset1) // заполнение базы данных начальными данными если нужно

    const res = await req
      .get(`${SETTINGS.PATH.USERS}/1`)
      .expect(200)

    expect(res.body).toEqual(dataset1.users[0])
  })
  it('should get 404 for non existing entity', async () => {
    setDB(dataset1) // заполнение базы данных начальными данными если нужно

    const res = await req
      .get(`${SETTINGS.PATH.USERS}/-100 `)
      .expect(404)
  })
  it('should create an entity', async () => {
    setDB()
    const newUser: any = {
      name: 'Test Name 1'
    }

    const res = await req
      .post(SETTINGS.PATH.USERS)
      .send(newUser) // отправка данных
      .expect(201)

    expect(res.body.name).toEqual(newUser.name)

    const createdEntity = res
  })

  it('shouldn\'t create an entity with incorrect input data', async () => {
    setDB()
    const newUser: any = {
      name: ''
    }

    const res = await req
      .post(SETTINGS.PATH.USERS)
      .send(newUser) // отправка данных
      .expect(400)

  })
})