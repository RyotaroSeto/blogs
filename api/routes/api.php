<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TopicController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\PostLikeController;
use App\Http\Controllers\PasswordResetController;
use App\Http\Controllers\LifeController;


// Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/user', [AuthController::class, 'user']);
Route::post('/logout', [AuthController::class, 'logout']);

// Route::group(['middleware' => 'api', 'prefix' => 'password'], function () {
//   Route::post('/create', [PasswordResetController::class, 'create']);
//   Route::get('/find/{token}', [PasswordResetController::class, 'find']);
//   Route::post('/reset', [PasswordResetController::class, 'reset']);
// });
Route::group(['prefix' => 'life'], function () {
  Route::get('/', [LifeController::class, 'index']);
  Route::post('/insert', [LifeController::class, 'insert']);
  Route::get('/edit', [LifeController::class, 'getTargetLife']);
  Route::post('/edit', [LifeController::class, 'edit']);
});
Route::group(['prefix' => 'topics'], function () {
	Route::post('/', [TopicController::class, 'store'])->middleware('auth:api');
	Route::get('/', [TopicController::class, 'index']);
	Route::get('/{topic}', [TopicController::class, 'show']);
	Route::patch('/{topic}', [TopicController::class, 'update'])->middleware('auth:api');
	Route::delete('/{topic}', [TopicController::class, 'destroy'])->middleware('auth:api');
	// post route groups
	Route::group(['prefix' => '/{topic}/posts'], function () {
		Route::get('/{post}', [PostController::class, 'show']);
		Route::post('/', [PostController::class, 'store'])->middleware('auth:api');
		Route::patch('/{post}', [PostController::class, 'update'])->middleware('auth:api');
		Route::delete('/{post}', [PostController::class, 'destroy'])->middleware('auth:api');
		// likes
		Route::group(['prefix' => '/{post}/likes'], function () {
			Route::post('/', [PostLikeController::class, 'store'])->middleware('auth:api');
		});
	});
});
