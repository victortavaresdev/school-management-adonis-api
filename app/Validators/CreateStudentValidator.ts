import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CustomMessages, rules, schema } from '@ioc:Adonis/Core/Validator'

export default class CreateStudentValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    first_name: schema.string(),
    last_name: schema.string(),
    age: schema.number(),
    gender: schema.enum(['M', 'm', 'F', 'f']),
    email: schema.string([rules.email()]),
  })

  public messages: CustomMessages = {}
}
