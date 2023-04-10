<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::get('/usuarios', 'App\Http\Controllers\Api\UsuarioController@index');
Route::get('/usuarios/{id}', 'App\Http\Controllers\Api\UsuarioController@show');
Route::post('/usuarios/{id}/buscaportoken', 'App\Http\Controllers\Api\UsuarioController@buscaUsuariosPorToken');
Route::post('/usuarios/registro/newuser', 'App\Http\Controllers\Api\UsuarioController@store');
Route::put('/usuarios/editar/usuario', 'App\Http\Controllers\Api\UsuarioController@update');
Route::delete('/usuarios/{usuario}', 'App\Http\Controllers\Api\UsuarioController@destroy');
Route::post('/usuarios/login', 'App\Http\Controllers\Api\UsuarioController@login')->middleware('canAccess');
Route::get('/usuarios/logout', 'App\Http\Controllers\Api\UsuarioController@logout')->middleware('canAccess');
Route::post('/usuarios/{id}/buscausuario', 'App\Http\Controllers\Api\UsuarioController@buscausuario');
Route::post('/usuarios/{id}/editarusuarioadmin', 'App\Http\Controllers\Api\UsuarioController@editarusuarioadmin');

/*Rutas API Foodtrucks*/
Route::get('/foodtrucks', 'App\Http\Controllers\Api\FoodtruckController@index');
Route::get('/foodtrucks/{id}', 'App\Http\Controllers\Api\FoodtruckController@show');
Route::post('/foodtrucks', 'App\Http\Controllers\Api\FoodtruckController@store');
Route::put('/foodtrucks/{id}/editar', 'App\Http\Controllers\Api\FoodtruckController@update');
Route::delete('/foodtrucks/{foodtruck}', 'App\Http\Controllers\Api\FoodtruckController@destroy');
Route::post('/foodtrucks/buscador/foodtruck', 'App\Http\Controllers\Api\FoodtruckController@buscaFoodtruck');
Route::get('/foodtrucks/listaporpropietario/{id}', 'App\Http\Controllers\Api\FoodtruckController@getFoodtrucksByUser');
Route::get('/foodtrucks/listaporpropietario/{id}/abrirfoodtruck', 'App\Http\Controllers\Api\FoodtruckController@abrirfoodtruck');
Route::get('/foodtrucks/listaporpropietario/{id}/cerrarfoodtruck', 'App\Http\Controllers\Api\FoodtruckController@cerrarfoodtruck');
