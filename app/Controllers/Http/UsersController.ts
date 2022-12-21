import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ConflictException from 'App/Exceptions/ConflictException'
import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'
import UpdateUser from 'App/Validators/UpdateUserValidator'

export default class UsersController {
  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate(CreateUser)

    const userEmail = await User.findBy('email', payload.email)
    if (userEmail) throw new ConflictException('Email already exists.')

    const user = await User.create(payload)

    return response.created({ user })
  }

  public async update({ request, response, bouncer }: HttpContextContract) {
    const id = request.param('id')
    const { name, email, password } = await request.validate(UpdateUser)
    const user = await User.findOrFail(id)

    await bouncer.authorize('updateUser', user)

    user.name = name
    user.email = email
    user.password = password
    await user.save()

    return response.ok({ user })
  }

  public async destroy({ request, response, bouncer }: HttpContextContract) {
    const id = request.param('id')
    const user = await User.findOrFail(id)
    await bouncer.authorize('deleteUser', user)
    await user.delete()

    return response.ok({})
  }
}
