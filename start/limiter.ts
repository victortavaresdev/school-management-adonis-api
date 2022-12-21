import { Limiter } from '@adonisjs/limiter/build/services'

export const { httpLimiters } = Limiter.define('global', () =>
  Limiter.allowRequests(60).every('1 min')
).define('login', () => Limiter.allowRequests(10).every('1 min'))
