import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Student from 'App/Models/Student'
import CreateStudent from 'App/Validators/CreateStudentValidator'

export default class StudentsController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateStudent)
    const student = await Student.create(payload)

    return response.created({ student })
  }
}
