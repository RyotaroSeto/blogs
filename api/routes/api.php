<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\AuthController;


// Route::get("/", function () {
//   return "Hello World!";
// });

// Route::post("/login", function () {
//   return "Hello World!";
// });
// Route::post('/login', [LoginController::class, 'index']);
// Route::middleware(['api'])->group(function (Request $request) {
// Route::prefix('admin')->group(function () {

// /api/auth/login
Route::group(['middleware' => ['api'],'prefix' => 'auth'], function ($router) {
  Route::post('/register', [AuthController::class, 'register']);
  Route::post('/login', [AuthController::class, 'login']);
  Route::get('/user', [AuthController::class, 'user']);
  Route::post('/logout', [AuthController::class, 'logout']);

  Route::post('/refresh', [AuthController::class, 'refresh']);
  Route::get('/me', [AuthController::class, 'me']);
});

// ルートのリダイレクト
Route::redirect('/here', '/there');
// 複数のHTTP動詞に応答するルート
Route::match(['get', 'post'], '/', function () {
  //
});
Route::any('/', function () {
  //
});
// ルートパラメータ 
Route::get('/user/{id}', function ($id) {
  return 'User '.$id;
});
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
  return $postId.'User '.$commentId;
});
// オプションパラメータ
Route::get('/user/{name?}', function ($name = null) {
  return $name;
});
