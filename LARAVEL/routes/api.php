<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::get('/user', function (Request $request) {
//     return $request->user();
// });

Route::prefix('auth')->group(function () {
  Route::post('register', 'AuthController@register');
  Route::post('login', 'AuthController@login');
  Route::get('refresh', 'AuthController@refresh');
  Route::group(['middleware' => 'auth:api'], function(){
      Route::get('user', 'AuthController@user');
      Route::post('logout', 'AuthController@logout');
  });
});
Route::group(['middleware' => 'auth:api'], function(){
  // Users
  Route::get('users', 'UserController@index')->middleware('isAdmin');
  Route::get('users/{id}', 'UserController@show')->middleware('isAdminOrSelf');
});

// Route::group(array('prefix' => 'api'), function()
// {



  Route::get('/', function () {
      return response()->json(['message' => 'Account API', 'status' => 'Connected']);;
  });

  Route::get('accounts/saldo', 'CurrentAccountsController@saldo');
  Route::get('accounts/extrato', 'CurrentAccountsController@extrato');
//   Route::get('accounts', 'CurrentAccountsController@index');
  Route::post('accounts/depositar', 'CurrentAccountsController@depositar');
  Route::post('accounts/sacar', 'CurrentAccountsController@sacar');
//   Route::resource('accounts', 'CurrentAccountsController');
// });

// Route::get('/', function () {
//     return redirect('api');
// });