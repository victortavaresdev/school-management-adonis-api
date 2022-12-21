import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Class from 'App/Models/Class'
import CreateClass from 'App/Validators/CreateClassValidator'

export default class ClassesController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateClass)
    const classData = await Class.create(payload)

    await classData.related('students').attach([payload.student_id])

    return response.created({ class: classData })
  }

  public async index({ request, response }: HttpContextContract) {
    const classes: Class[] = await Class.all()

    return response.ok({ classes })
  }

  public async findById({ request, response }: HttpContextContract) {
    const id = request.param('id')
    const classData = await Class.findOrFail(id)
    await classData.load('students')

    return response.ok({ class: classData })
  }
}
