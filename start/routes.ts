import Route from '@ioc:Adonis/Core/Route'

Route.post('/users', 'UsersController.store').middleware('throttle:global')
Route.patch('/users/:id', 'UsersController.update').middleware('auth').middleware('throttle:global')
Route.delete('/users/:id', 'UsersController.destroy')
  .middleware('auth')
  .middleware('throttle:global')

Route.post('/classes', 'ClassesController.store').middleware('auth').middleware('throttle:global')
Route.get('/classes', 'ClassesController.index').middleware('auth').middleware('throttle:global')
Route.get('/classes/:id', 'ClassesController.findById')
  .middleware('auth')
  .middleware('throttle:global')

Route.post('/students', 'StudentsController.store').middleware('auth').middleware('throttle:global')

Route.post('/auth/login', 'AuthController.login').middleware('throttle:login')
Route.post('/auth/logout', 'AuthController.logout').middleware('auth').middleware('throttle:global')
Route.get('/profile', 'AuthController.profile').middleware('auth').middleware('throttle:global')
