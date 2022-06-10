import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async login({ request, response, auth, session }: HttpContextContract) {
        try {
          await auth.attempt(request.input('email'), request.input('password'))
          return response.redirect('/')
        } catch (e) {
          session.flash('notification', 'Login failed. Check email/password & retry.')
          return response.redirect('back')
        }
      }
}
