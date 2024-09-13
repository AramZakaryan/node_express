// import {VideoDBType} from './video-db-type'

import { User } from '../input-output-types/user-types'

export type DBType = { // типизация базы данных (что мы будем в ней хранить)
  videos: any[] // VideoDBType[]
  users: User[]
  courses: any[]
  userCourseBinding: any[]
  // some: any[]
}

export const db: DBType = { // создаём базу данных (пока это просто переменная)
  videos: [],
  users: [
    { id: 1, name: 'Gago jaja' },
    { id: 2, name: 'Suso tota' },
    { id: 3, name: 'Valo jaja' },
    { id: 4, name: 'Luso tota' },
    { id: 5, name: 'Peto jaja' }
  ],
  courses: [
    { id: 1, title: 'frontend', studentsCount: 10 },
    { id: 2, title: 'backend', studentsCount: 10 },
    { id: 3, title: 'automation QA', studentsCount: 10 },
    { id: 4, title: 'devops', studentsCount: 10 }
  ],
  userCourseBinding: [
    { userId: 1, courseId: 1, date: new Date(2022, 10, 1) },
    { userId: 1, courseId: 2, date: new Date(2022, 11, 1) },
    { userId: 2, courseId: 3, date: new Date(2022, 5, 15) },
    { userId: 2, courseId: 4, date: new Date(2022, 8, 20) },
    { userId: 3, courseId: 1, date: new Date(2022, 3, 10) },
    { userId: 3, courseId: 2, date: new Date(2022, 6, 25) },
    { userId: 4, courseId: 3, date: new Date(2022, 7, 5) },
    { userId: 4, courseId: 4, date: new Date(2022, 9, 15) },
    { userId: 5, courseId: 1, date: new Date(2022, 4, 12) },
    { userId: 5, courseId: 2, date: new Date(2022, 2, 18) },
    { userId: 5, courseId: 3, date: new Date(2022, 11, 30) }
  ]

  // some: []
}

// функция для быстрой очистки/заполнения базы данных для тестов
export const setDB = (dataset?: Partial<DBType>) => {
  if (!dataset) { // если в функцию ничего не передано - то очищаем базу данных
    db.videos = []
    db.users = []
    db.courses = []
    db.userCourseBinding = []
    // db.some = []
    return
  }

  // если что-то передано - то заменяем старые значения новыми
  db.videos = dataset.videos || db.videos
  db.users = dataset.users || db.users
  db.courses = dataset.courses || db.courses
  db.userCourseBinding = dataset.userCourseBinding || db.userCourseBinding
  // db.some = dataset.some || db.some
}