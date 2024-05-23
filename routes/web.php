<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProfileInfoController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\Auth\PasswordController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\Auth\AuthenticatedSessionController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/',[HomeController::class, 'index'])->middleware(['auth', 'verified'])->name('home');
Route::get('/logout',[AuthenticatedSessionController::class, 'destroy'])->middleware(['auth', 'verified']);
Route::get('/profile',[ProfileController::class, 'index'])->middleware(['auth', 'verified'])->name('profile');
Route::get('/profile/basic-info',[ProfileInfoController::class, 'update'])->middleware(['auth', 'verified']);
// In your web.php routes file
Route::post('/profile/cover-photo', [ProfileController::class, 'updateCoverPhoto'])->name('profile.cover-photo.update');
Route::post('/profile/avatar-photo', [ProfileController::class, 'updateAvatarPhoto']);


// POST
Route::get('/posts', [PostController::class, 'index'])->middleware(['auth', 'verified']);
Route::post('/post', [PostController::class, 'store'])->middleware(['auth', 'verified']);
Route::post('/posts', [PostController::class, 'like'])->middleware(['auth', 'verified']);
Route::post('/postsComment', [PostController::class, 'storeComment'])->middleware(['auth', 'verified']);
Route::get('/posts/post/{id}', [PostController::class, 'show'])->middleware(['auth', 'verified']);
Route::get('/posts/{id}', [PostController::class, 'destroy'])->middleware(['auth', 'verified']);


Route::get('/admin', [AdminController::class, 'index'])->middleware(['auth', 'verified']);


Route::middleware('guest')->group(function () {
    Route::get('register', [RegisteredUserController::class, 'create'])
                ->name('register');

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('login', [AuthenticatedSessionController::class, 'create'])
                ->name('login');

    Route::post('login', [AuthenticatedSessionController::class, 'store']);

    Route::get('forgot-password', [PasswordResetLinkController::class, 'create'])
                ->name('password.request');

    Route::post('forgot-password', [PasswordResetLinkController::class, 'store'])
                ->name('password.email');

    Route::get('reset-password/{token}', [NewPasswordController::class, 'create'])
                ->name('password.reset');

    Route::post('reset-password', [NewPasswordController::class, 'store'])
                ->name('password.store');
});

Route::middleware('auth')->group(function () {
    // Route::get('verify-email', EmailVerificationPromptController::class)
    //             ->name('verification.notice');

    // Route::get('verify-email/{id}/{hash}', VerifyEmailController::class)
    //             ->middleware(['signed', 'throttle:6,1'])
    //             ->name('verification.verify');

    // Route::post('email/verification-notification', [EmailVerificationNotificationController::class, 'store'])
    //             ->middleware('throttle:6,1')
    //             ->name('verification.send');

    // Route::get('confirm-password', [ConfirmablePasswordController::class, 'show'])
    //             ->name('password.confirm');

    // Route::post('confirm-password', [ConfirmablePasswordController::class, 'store']);

    // Route::put('password', [PasswordController::class, 'update'])->name('password.update');

    Route::post('logout', [AuthenticatedSessionController::class, 'destroy'])
                ->name('logout');
});



Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
    // Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
