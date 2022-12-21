import {
  BaseModel,
  beforeCreate,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import { v4 as uuidv4 } from 'uuid'
import Student from './Student'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public student_id: string

  @belongsTo(() => Student, { foreignKey: 'student_id' })
  public student: BelongsTo<typeof Student>

  @manyToMany(() => Student, { pivotTable: 'student_class', pivotTimestamps: true })
  public students: ManyToMany<typeof Student>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeCreate()
  public static generateUUID(classId: Class) {
    classId.id = uuidv4()
  }
}
