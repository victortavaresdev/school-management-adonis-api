import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AuthValidator from 'App/Validators/AuthValidator'

export default class AuthController {
  public async login({ request, response, auth }: HttpContextContract) {
    const { email, password } = await request.validate(AuthValidator)
    const { token } = await auth
      .use('api')
      .attempt(email, password, { expiresIn: process.env.TOKEN_EXPIRATION })

    return response.created({ token })
  }

  public async logout({ auth }: HttpContextContract) {
    await auth.use('api').revoke()

    return {
      revoked: true,
    }
  }

  public async profile({ auth }: HttpContextContract) {
    return auth.user
  }
}
