import Bouncer from '@ioc:Adonis/Addons/Bouncer'
import User from 'App/Models/User'

export const { actions } = Bouncer.define(
  'updateUser',
  (user: User, updateUser: User) => user.id === updateUser.id
).define('deleteUser', (user: User, deleteUser: User) => user.id === deleteUser.id)

export const { policies } = Bouncer.registerPolicies({})
