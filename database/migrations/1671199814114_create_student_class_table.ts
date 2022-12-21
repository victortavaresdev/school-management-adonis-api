import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'student_class'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.primary(['student_id', 'class_id'])
      table.string('student_id').references('students.id').notNullable()
      table.string('class_id').references('classes.id').notNullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
