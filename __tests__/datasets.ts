// import {VideoDBType} from '../src/db/video-db-type'
// import {Resolutions} from '../src/input-output-types/video-types'
import { DBType } from '../src/db/db'

// готовые данные для переиспользования в тестах

export const video1: any /*VideoDBType*/ = {
  id: Date.now() + Math.random(),
  title: 't' + Date.now() + Math.random()
  // author: 'a' + Date.now() + Math.random(),
  // canBeDownloaded: true,
  // minAgeRestriction: null,
  // createdAt: new Date().toISOString(),
  // publicationDate: new Date().toISOString(),
  // availableResolution: [Resolutions.P240],
}

export const users1: any = [
  { id: 1, name: 'Gago jaja' },
  { id: 2, name: 'Suso tota' },
  { id: 3, name: 'Valo jaja' },
  { id: 4, name: 'Luso tota' },
  { id: 5, name: 'Peto jaja' }
]

export const courses1: any = [
  { id: 1, title: 'frontend', studentsCount: 10 },
  { id: 2, title: 'backend', studentsCount: 10 },
  { id: 3, title: 'automation QA', studentsCount: 10 },
  { id: 4, title: 'devops', studentsCount: 10 }
]

export const userCourseBinding1 = [
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

export const dataset1: DBType = {
  videos: [video1],
  users: users1,
  courses: courses1,
  userCourseBinding: userCourseBinding1
}

// ...