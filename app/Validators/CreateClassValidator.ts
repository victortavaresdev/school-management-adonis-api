import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateClassValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string([rules.maxLength(50)]),
    description: schema.string([rules.maxLength(200)]),
    student_id: schema.string(),
  })

  public messages: CustomMessages = {}
}
