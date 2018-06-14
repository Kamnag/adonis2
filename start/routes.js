'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.get('user', 'UsersController.index')

Route.post('user', 'UsersController.store')

Route.delete('user/:userId' , 'UsersController.destroy')

Route.put('user', 'UsersController.update')


Route.on('/').render('welcome')
