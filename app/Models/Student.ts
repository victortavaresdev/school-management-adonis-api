import { BaseModel, beforeCreate, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Class from './Class'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public first_name: string

  @column()
  public last_name: string

  @column()
  public age: number

  @column()
  public gender: string

  @column()
  public email: string

  @manyToMany(() => Class, { pivotTable: 'student_class', pivotTimestamps: true })
  public classes: ManyToMany<typeof Class>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static generateUUID(student: Student) {
    student.id = uuidv4()
  }
}
