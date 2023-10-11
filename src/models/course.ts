'use strict'
import { globalIdField } from 'graphql-relay'
import data from '../data/courses.json'

export type Status = 'INACTIVE' | 'ACTIVE' | 'CANCELLED'

const statusMap: { [key: string]: Status} = {
    'inactive':'INACTIVE',
    'active': 'ACTIVE',
    'cancelled': 'CANCELLED'
}

/**
 * Model class representing a Banner course.
 */
export default class Course {
  id: string | null
  creditHours: number
  crn: number | null
  status: Status | null
  termCode: number | null
  title: string | null

  constructor() {
    this.id = null
    this.termCode = null
    this.creditHours = 0
    this.crn = null
    this.title = null
    this.status = 'INACTIVE'
  }

  static get(termCode: number) {
    return data
      .filter((d) => {
        return d.termCode === termCode
      })
      .map((d) => {
        const course = new Course()
        course.id = Buffer.from(`Course:${d.termCode}:${d.crn}`, 'utf8').toString('base64')
        course.termCode = d.termCode
        course.creditHours = d.creditHours
        course.crn = d.crn
        course.title = d.title
        course.status = d.status in statusMap ? statusMap[d.status] : course.status;
        return course
      })
  }
}
